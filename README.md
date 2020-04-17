# Parameterized Plugin
Parameters for this widget are passed in the `config.ttl` for each vocabulary - the example shows an instance of this widget with local name `:messageWidget`configured for a vocabulary with local name `:vocab`:

<pre><code>
@prefix schema: <http://schema.org/> .
@prefix skosmos: <http://purl.org/net/skosmos#> .
@prefix : <#> .

:vocab skosmos:useParamPlugin :messageWidget .

:messageWidget  a skosmos:ParameterizedPlugin ;
                skosmos:usePlugin "message";
                skosmos:parameters [
                  a schema:PropertyValue ;
                  schema:propertyID "msg";
                  schema:value "Tämä on testiviesti."@fi , "Det här är ett testmeddelande."@sv, "This is a default test message without a language code." ;
                ] .
</code></pre>

The message strings are identified as `schema:value` literals for `a  schema:PropertyValue` with `schema:propertyID  "msg"`. The widget matches the message language with Skosmos UI language, or uses the default message with no language tag for UI languages with don't have their own designated message. The requirement for plugin is to be installed under `SKOSMOS_HOME/plugins/message/` . General documentation for Skosmos plugins can be found in https://github.com/NatLibFi/Skosmos/wiki/Plugins .


