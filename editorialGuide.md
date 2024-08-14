# An Orcfax style guide

This document is intended to aid contributors in adhering to a more consistent
style and tone when creating documentation for Orcfax.

ADD TABLE OF CONTENTS

## Capitalization

### Acronyms

All acronyms capitalized unless never capitalized.

>Examples:
>
>* CER
>* ID
>* eUTXO

>Exceptions:
>
>* dApp
>* DeFi

Rules regarding acronyms extends to currencies. Example: ADA-USD

### Titles

The first word in Titles and all other Heading levels should be capitalized,
with all others being lowercase unless proper nouns or acronyms.

> Exceptions:
>
> Proper nouns and acronyms should adhere to their own style guides.

## Dashes

Dashes refers to the en dash (e.g. "-") and the em dash (e.g. "-—").

An en dash should be used to connect smaller grammatical units such as words,
numbers, or to illustrate a range.

>Example:
>
>* on-chain
>* between 1-10

Usage Example: This is an example of a PhoneGap client – which uses the Big Widget
to run – and does x, y, and z.

Use dashes cautiously and consider whether commas or parentheses would work just
as well. We always emphasize short, succinct sentences.

## Examples

Examples presented in line should be done in parentheticals precede by "exemplia
gratia", which will be abbreviated as “e.g.”. Example being this
(e.g. an example).

similarly, "id est" which is utilized to present alternative phrasing for the
purpose of clarity, will be abbreviated as "i.e" and will follow the same
convention.

Examples presented in blocks should be done using the following convention:

>Example
>
>The body of the example

This same convention is used for "Nota Bene" which will be abbreviated as "NB".

>NB
>
>Parenthaticals should not be split over lines

## Links

Links to both internal and external resources, which are referenced in line,
should use the following convention:

Text leading to a [reference][ref-1].

With the following appended to the end of the section in which in reference is
being made:

[ref-1]: https://referenceLink.com

## Lists

In line lists should have each listed item followed by a comma. An example list
being: a, b, c, and d.

Bulleted lists should use an asterisk and follow the following convention:

* The first
* The second
* And so on

If the items within a bulleted list are complete sentences, use appropriate
punctuation.

## Prose & tone

Documentation is read by its target audience depending on the situation. Good
documentation supports the situation and helps the reader find the information
and in a manner appropriate for that audience.

The first big distinction in documentation styles is between reference
documentation and and narrative documentation.

The reference style is meant for short documents that describe one item in a
structured way. This kind of documentation will frequently be looked up and
consumed bit by bit.

Documents that fall within this style are:

* Specs
* Glossary
* Editorial guide
* Integrator communications
* Third party solicitations

The narrative style is intended for aggregate documents which can be read and
understood as one document, to be read in parts or in whole. While a reader may
skip a chapter or section, reading the whole narrative documentation will result
in fuller understanding.

Documents that fall within this style are:

* Orcfax updates
* Orcfax docs content
* Other Orcfax public relations documents

These two styles are further styled by their intended purpose.

### Explanatory documentation

This kind of documentation is best used for explaining ideas more broadly or for
presenting the big picture. These documents msy be used to introduce technical
components, but detailed technical description should be given elsewhere.

The first appearance of an introduction should always be followed by its
explanation. Thereafter, the use of the acronym without description is
appropriate.

This style is suitable for the broadest audience and should therefore take care
not to delve in to technical specificities; if technical components are the
subject matter, it is sufficient to introduce them and to give a high level
overview as to their significance and any implications their use has within the
broader solution.

In explanatory documentation it is advisable to use simple architecture charts
and drawings.

Explanatory and instructive documentation should link to the technical
components being introduced, so that developers have a point of further
reference.

To aid readers in navigating these documents, page titles should contain
keywords (e.g. "core concepts", "understanding"). If relevant, the page title
should also include the name of the technical component being introduced.

Good page titles are:

* Understanding Orcfax validation
* Orcfax update # -- The subject of the update
* Orcfax architecture overview

### Instructive documentation

This kind of documentation should always be written from the perspective of the
developer that is using the product, not from the perspective of the developer
who has built it, or even from the perspective of "the system".

Instructive documentation is meant to help a developer perform a specific task.
Examples of this style would be Orcfax integration documents given to potential
integrators, or resources to aid network participants in operating their nodes.
These documents should address any prerequisites, provide instructions for
setting up the development environment, with guides for installation and use of
the component.

Developers read instructive documentation with a specific goal in mind;
therefore, contributors should write these documents to help developers get from
point A to B in the shortest time possible.

Instead of in-depth explanations of concepts or context, instructive
documentation should explain concepts that are touched on in one or two
sentences. Contributors may refer to explanatory documentation for additional
context if desired.

Every instructive documentation should begin by identifying the goal: explain
what the developer will be able to achieve by following the guide. Make the
instructive documentation you write easy to follow by minimizing assumptions and
listing all prerequisites. This includes familiarity with programming languages,
concepts, installed developer tools, required user accounts, etc.

There should not be any steps prescribed which are not explained; each step of
the instructions should make clear why it needs to be followed.

Examples are absolutely crucial in making instructive documentation easy to
follow. Many developers simply copy and paste the examples, so make sure that
there is an example for each step within the guide, and that the examples can be
copied, pasted and executed. An example being:

```sh
make gofer-snapshot
```

Whenever the developer needs to replace values in the example, highlight these
placeholders so that it is obvious where user provided values should be
substituted.

To help developers find instructive documentation, create page titles with a
care for search engine optimization (SEO) in mind. This means, include the
programming languages and the name of the technical component(s) being used and
explained in the title, while also including the action that will be performed.

Many search engines cut titles off after 60 characters, so contributors should
keep titles shorter by leaving off extraneous language such as "how to".

Good examples for page titles for instructive documentation are:

* Consuming Orcfax Statements
*

### Reference documentation

Reference documentation is consumed in a way similar to a dictionary or
encyclopedia-- you consult it. Like instructive documentation, reference
documentation is task-oriented, but the task at hand is a smaller fragment that
typically involves clarifying a readers understanding of a term or a developer's
memory of configuration parameters.

Write reference documentation so that each component can stand on it's own. Make
references to other items browsable through links.

Like instructive documentation, reference documentation is more useful when it
includes examples. Include examples where sensible.

Write reference documentation from the perspective of the developer who is using
it, not from the perspective of the developer that built it. Contributors should
assume that the The consuming developer is not familiar with the component, and
should not need to know anything about its implementation.

## General Notes

| Rule | Rationale |
| ---- | --------- |
| DEXes & CEXes | Plural for exchange acronyms are represented by appending -es. |
| $FACT & FACT token | either to be used When referring to the Orcfax utility token; the same convention applies to all other Cardano native tokens. |
| Facts & Fact Statements | In the context of Orcfax, a Fact or Fact Statement is a proper noun. |
| NB |  The acronym for Nota Bene is used within a text block to draw attention to salient points. |
| Orcfax Network | All networks developed by Orcfax are proper nouns. |

## General styling

* If a max line length is stipulated in a repositories config, then contributors
should ensure their adherence.

* Parenthaticals should not be split over lines

## Resources

This guide has been informed by the following editorial guides
* https://raw.githubusercontent.com/adobeio/styleguide/master/opensource/doc-style.md
*