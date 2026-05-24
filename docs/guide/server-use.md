# Server use

How to access and use the Connection Lab server. Replace this example content with your real procedures.

## Quick reference

| What | Where / how |
| --- | --- |
| Host | `TBD` |
| SSH | `ssh user@host` |
| Shared storage | `TBD` |

## Getting access

1. Request an account from the lab admin.
2. Add your SSH public key.
3. Test login from the lab network.

```bash
ssh your-username@lab-server.example.edu
```

::: tip
Keep commands and paths in plain Markdown — no special build steps per page.
:::

## Storage layout

Describe where project files, datasets, and scratch space live.

### Home directory

Your home directory is for personal config and small files.

### Shared projects

Use the shared volume for collaboration (path TBD).

## Troubleshooting

### Cannot connect

- Confirm you are on campus VPN or in BH 3440.
- Check that your key is on the server.

### Out of disk space

- Move large artifacts to shared storage or archive.
- Ask in lab chat before deleting others’ files.
