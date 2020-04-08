#Parameterized Plugin
Skosmos makes it possible to pass an arbitrary set of parameters for a widget, which interprets the parameters in order to create content for Skosmos concept and vocabulary views. Parameters are passed in the `config.ttl` - the example shows unlabeled blank nodes with nested properties in schema.org namespace (https://schema.org/PropertyValue):

<pre><code>
@prefix schema: <http://schema.org/> .
@prefix skosmos: <http://purl.org/net/skosmos#> .
@prefix : <#> .

:vocab skosmos:useParameterizedPlugin :messageWidget .

:messageWidget  a skosmos:ParameterizedPlugin ;
                skosmos:usePlugin "awesome-message-widget";
                skosmos:parameters [
                        a               schema:PropertyValue ;
                        schema:propertyID "msg";
                        Schema:value	  "Message in Finnish"@fi ,
  "Message in Swedish"@sv,
  “Default message without language code”;
                    ] ,
                    [
                        a               schema:PropertyValue ;
                        schema:propertyID "color" ;
                        schema:value    "#800000" ;
                    ] ,
                    [
                        a               schema:PropertyValue ;
                        schema:propertyID "imageUrl" ;
                        schema:value    "http://example.com/media/unicorn.png" ;
                    ] .
</code></pre>

Each propertyValue is identified by its `schema:propertyID`. It is up to the parameter plugin to interpret these name-value pairs. The requirement for each parameter plugin is to be installed under `plugins/` in a directory named after the string passed in `skosmos:usePlugin`, e.g. `Skosmos-home/plugins/awesome-message-widget/` as documented in https://github.com/NatLibFi/Skosmos/wiki/Plugins . The parameters are passed to javascript as:

<pre><code>
var pluginParameters = {
	awesome-message-widget : { 	msg_fi : "Message in Finnish" ,
								msg_sv : "Message in Swedish" ,
								msg    : “Default message without language code” ,
								color  : "#800000" ,
								imageUrl : "http://example.com/media/unicorn.png"	}
};
</code></pre>

Otherwise the plugins follow the Skosmos documentation for plugins.


