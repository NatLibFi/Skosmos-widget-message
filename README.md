# Skosmos-widget-message

This is a general-purpose notification widget for Skosmos. The message strings should be passed to Skosmos front-end as an associative js-array named 'pluginMessages' with ISO 639-1 language codes as keys.

The message plugin is registered for a vocabulary resource as a string that matches the directory name under the Skosmos `plugins` directory (e.g. `Skosmos/plugins/message` should be registered as `"message"`). Skosmos wiki offers further documentation at: https://github.com/NatLibFi/Skosmos/wiki/Plugins

 
## Example of the message configuration in Skosmos config.ttl

```
:yso skosmos:useMessagePlugin skosmos:testPlugin .

skosmos:testPlugin
    skosmos:usePlugin "message" ;
    skosmos:pluginMessage "Message in Finnish"@fi , "Message in Swedish"@sv .
