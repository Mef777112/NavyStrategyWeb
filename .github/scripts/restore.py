import hashlib, json
from pathlib import Path
site = Path('site')
for item in json.loads(Path('chunks.json').read_text()):
    target = site / item['file']
    digest = hashlib.sha256()
    with target.open('wb') as output:
        for name in item['parts']:
            part = site / name
            data = part.read_bytes()
            digest.update(data)
            output.write(data)
    if digest.hexdigest() != item['sha256']:
        raise RuntimeError('Checksum mismatch: ' + item['file'])
    for name in item['parts']:
        (site / name).unlink()
print('Verified and reconstructed all Unity build files.')
