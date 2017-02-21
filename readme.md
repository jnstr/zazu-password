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

Instead of `password` you can also use `pass` or `pwd` as prefix.

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

## Security

Since all results that are displayed and returned by a Zazu plugin are stored in the log files, it's insecure to display and render the generated password in zazu. This is the reason why we don't show the generated password in the plugin.  
The password is generated in the plugin but is never handled by Zazu which makes it more secure.

If you really really want to see the generated password in zazu, you can add the "insecure" variable to the `~/.zazurc.json` file and set it to true.

```json
{
  "plugins": [
    {
      "name": "jnstr/zazu-password",
      "variables": {
          "insecure": true
      }
    }
  ]
}
```


## Screenshots

![Zazu password](./assets/screenshot.png)
