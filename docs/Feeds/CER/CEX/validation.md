---
id: cex-4
sidebar_position: 4
slug: /validation
---

import CodeBlock from '@theme/CodeBlock';
import Validation from '!!raw-loader!/schema/cer/cex/validation.json';

# Validation

A place for Orcfax to describe the types/properties relevant to a
`validation.json`.

Orcfax utilizes the following Schema.org types and properties in its Validation
records. The description provided by [Schema.org][schema-1] follows each
unless Orcfax maintains a more nuanced understanding-- in these cases, the
description will be *italicized*. If the term appears in its own definition,
it will be replaced when possible with a \[synonym\] in order to aid
understanding.

## Schema.org Types

| Type     | Description                                                   |
| ------------ | --------------------------------------------------------------|
| [`CreativeWork`][type-1] | *A generic term to encompass a broad spectrum of creative works, including text, images, software programs, their outputs, etc.*|
| [`Event`][type-2] | An \[entity\] such as a school, NGO, corporation, club, etc.|
| [`MediaObject`][type-3] | An object such as an image, video, audio, or text object embedded in a web page or a downloadable dataset.|
| [`Observation`][type-4] | *A generic term to encompass a broad spectrum of creative works, including text, images, software programs, their outputs, etc.*|
| [`Organization`][type-5] | An \[entity\] such as a school, NGO, corporation, club, etc.|
| [`PostalAddress`][type-6] | The price asked for a given offer by the respective organization or person.| <!-- should this be more specific to our context? -->
| [`PropertyValue`][type-7] | *A generic term to encompass a broad spectrum of creative works, including text, images, software programs, their outputs, etc.*|
| [`StatisticalValue`][type-8] | *A generic term to encompass a broad spectrum of creative works, including text, images, software programs, their outputs, etc.*|
| [`TextObject`][type-9] | *A generic term to encompass a broad spectrum of creative works, including text, images, software programs, their outputs, etc.*|

[schema-1]: https://schema.org/
[type-1]: https://schema.org/CreativeWork
[type-2]: https://schema.org/Event
[type-3]: https://schema.org/MediaObject
[type-4]: https://schema.org/Observation
[type-5]: https://schema.org/Organization
[type-6]: https://schema.org/PostalAddress
[type-7]: https://schema.org/PropertyValue
[type-8]: https://schema.org/StatisticalValue
[type-9]: https://schema.org/TextObject

## Schema.org Properties

| Property     | Type     | Description                                                   |
| ------------ | ------------ | --------------------------------------------------------------|
| [`about`][prop-1] | Event     | The subject matter of the content.|
| [`additionalType`][prop-2] | MediaObject     | Used to add more specific types from external vocabularies when a schema.org equivalent is not available.|
| [`address`][prop-3] | Organization     | *The physical address of the entity which has executed the validation process*.|
| [`addressLocality`][prop-4] | PostalAddress     | The locality in which the street address is, and which is in the region.|
| [`addressRegion`][prop-5] | PostalAddress     | The region in which the locality is, and which is in the country.|
| [`comment`][prop-6] | TextObject     | *Used to give users additional context regarding the record*.|
| [`contributor`][prop-7] | MediaObject     | *The entity which has executed the validation process*.|
| [`description`][prop-8] | CreativeWork, Event      | A description of the item.|
| [`geo`][prop-9] | PostalAddress     | *The geographical coordinates of the place where the validation process was executed*.|
| [`hasPart`][prop-10] | CreativeWork     | Indicates an item or `CreativeWork` that is part of this item, or CreativeWork.|
| [`identifier`][prop-11] | MediaObject     | Used to represent any kind of identifier for any kind of Thing, such as ISBNs, GTIN codes, UUIDs etc.|
| [`isBasedOn`][prop-12] | MediaObject     | A resource from which this work is derived or from which it is a modification or adaptation.|
| [`locationCreated`][prop-13] | Organization     | The location where the `CreativeWork` was created.|
| [`measurementMethod`][prop-14] | Observation, StatisticalValue     | A subproperty of `measurementTechnique` that can be used for specifying specific methods.|
| [`measurementTechnique`][prop-15] | StatisticalValue     | *The means by which an `Observation` or `StatisticalVariable`, and their corresponding variable(s) are measured*.|
| [`name`][prop-16] | MediaObject, Organization, PropertyValue     | The name of the item.|
| [`recordedIn`][prop-17] | Event     | The `CreativeWork` that captured all or part of this `Event`.|
| [`sha256`][prop-18] | TextObject     | *The sha256 hash of the indicated item's content*.|
| [`startDate`][prop-19] | Event     | The start date and time of the item.|
| [`text`][prop-20] | CreativeWork     | The textual content of this `CreativeWork`.|
| [`value`][prop-21] | Observation, PropertyValue     | *The value of an `Observation` or `propertyValue` being reported*.|
| [`valueReference`][prop-22] | Observation     | A secondary value that provides additional information on the original `value`.|
| [`variableMeasured`][prop-23] | StatisticalValue     | The variable(s) measured in some dataset, either described as text or more explicitly as a `StatisticalVariable`.|

[prop-1]: https://schema.org/about
[prop-2]: https://schema.org/additionalType
[prop-3]: https://schema.org/address
[prop-4]: https://schema.org/addressLocality
[prop-5]: https://schema.org/addressRegion
[prop-6]: https://schema.org/comment
[prop-7]: https://schema.org/contribution
[prop-8]: https://schema.org/description
[prop-9]: https://schema.org/geo
[prop-10]: https://schema.org/hasPart
[prop-11]: https://schema.org/identifier
[prop-12]: https://schema.org/isBasedOn
[prop-13]: https://schema.org/locationCreated
[prop-14]: https://schema.org/measurementMethod
[prop-15]: https://schema.org/measurementTechnique
[prop-16]: https://schema.org/name
[prop-17]: https://schema.org/recordedIn
[prop-18]: https://schema.org/sha256
[prop-19]: https://schema.org/startDate
[prop-20]: https://schema.org/text
[prop-21]: https://schema.org/value
[prop-22]: https://schema.org/valueReference
[prop-23]: https://schema.org/variableMeasured

## Validation example

<CodeBlock language="jsx">{Validation}</CodeBlock>

<a target="_blank" href="/schema/cer/cex/validation.json" download="validation.json">Download</a>
