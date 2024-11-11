---
id: Calculation
sidebar_position: 3
slug: /Data calculation
---

# Data calculation
<br/>
The process of triangulation, introduced in the Collection phase, and the
process of normalization enables the critical step of Calculation.<br/>
<br/>
Beginning with normalization, each node after having queried the relevant data
sources, will then be faced with this task. The normalization process takes the
output of the Collection phase and transitions it into a consistent and
standardized schema, which can be used for further analysis.<br/>
<br/>
In order to accomplish this task while maximizing product interoperability,
Orcfax uses the linked-data schema produced through Schema.org to encode
its key-value pairs. By leveraging the popularity of the ontology, Orcfax has
positioning its product as a highly versatile, highly valuable, future
repository of authentic and validated facts.<br/>
<br/>
The use cases for this repository are numerous and it has not escaped our notice
that such a rich database will also hold value for institutions looking to
responsibly train machine learning models. We want to make sure that the data
collected by Orcfax nodes remains reusable and accessible to future platforms.
And the best way to do that is to collect high quality metadata, ensure that the
metadata is linked, and that the product is not just intelligible to the human
user but also machine readable. All of these requirements have been baked into
our system and reflected in our schema. We have thoughtfully assigned our fact
statements to the Schema.org key "claim" to reflect the research done by the
fact-checking community. Again, this opens up a whole new world beyond
blockchain for the data that Orcfax is processing.<br/>
<br/>
The next phase is calculation. It is in this phase that the
normalized outputs of multiple data source queries can be used to derive a
single value. This step is important because it allows Orcfax to establish the
accuracy of the data. Each node after having queried the relevant data sources,
received the data, and standardized these outputs will then need to resolve the
target values. In the case of feed types such as currency pairs (e.g. ADA/USD),
nodes will derive the mean from their data source outputs in order to mitigate
the effects of slippage. If variances above a set threshold are detected between
the reports (ie one of the sources reports something different) there's a
problem. At that point the process ends and the data doesn't get to the point of
publication.<br/>
<br/>
