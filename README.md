# Parameterized Plugin
Parameters for this widget are passed in the `config.ttl` for each vocabulary - the example shows an instance of this widget with local name `:messageWidget`configured for a vocabulary with local name `:vocab`:

<pre><code>
@prefix schema: <http://schema.org/> .
@prefix skosmos: <http://purl.org/net/skosmos#> .
@prefix : <#> .

:vocab skosmos:useParameterizedPlugin :messageWidget .

:messageWidget  a skosmos:ParameterizedPlugin ;
                skosmos:usePlugin "message";
                skosmos:parameters 
			[ a			schema:PropertyValue ;
                          schema:propertyID 	"msg";
                          schema:value		"Message in Finnish"@fi ,
  						"Message in Swedish"@sv,
  						“Default message without a language code”; ] .
</code></pre>

The message strings are identified as `a  schema:PropertyValue` with `schema:propertyID  "msg"`.  The requirement for plugin is to be installed under `SKOSMOS_HOME/plugins/message/` . General documentation  in https://github.com/NatLibFi/Skosmos/wiki/Plugins .


