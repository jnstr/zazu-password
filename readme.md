# Zazu Password

A simple password generator for [Zazu](http://zazuapp.org), inspired by the [DuckDuckgo](http://ddg.gg) [password generator](https://duck.co/ia/view/password).

## Usage

Open Zazu and type `password` with optional a password strength (weak, average, strong) and a password length.  
Examples:
- `password`
- `password hard 30`
- `password 10 weak`
- `password average`
- `password 16`

You an copy the generated password by selecting it.

## Installing

Add `jnstr/zazu-password` inside of `plugins` block of your `~/.zazurc.json` file.

```json
{
  "plugins": [
    "jnstr/zazu-password"
  ]
}
```

The plugin defaults to an average password of 16 characters, but you can override these in your `~/.zazurc.json` file.
```json
{
  "plugins": [
    {
      "name": "jnstr/zazu-password",
      "variables": {
          "length": 64,
          "strength": "hard"
      }
    }
  ]
}
```

## Screenshots

![Zazu password](./assets/screenshot.png)
