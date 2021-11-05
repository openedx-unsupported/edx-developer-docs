#######################
Developer Documentation
#######################

.. note::
    This is the landing page for documentation relevant to developers of the Open edX platform.  For other documentation
    resources targeted for edX learners, educators, researchers, and Open edX operators, see `docs.edx.org <docs.edx.org>`_.

.. toctree::
    :hidden:

    Open edX Proposals <https://open-edx-proposals.readthedocs.io/en/latest/>
    micro_frontends/index
    named_releases
    Open edX Extensions and APIs <https://open.edx.org/extending-edx>
    (Legacy) Open edX Developer's Guide <https://edx.readthedocs.io/projects/edx-developer-guide/en/latest/>
    developers_guide/micro_frontends_in_open_edx

Getting Started
###############
In a hurry to start writing code? Go set up `Devstack`_, our local Docker-based development environment.

New Contributors
################

Welcome contributors! There are many ways of contributing to the code and the goal of this documentation is to help you with just that!

Ways to Contribute
##################

There are many different ways to contribute to the platform.

Translations
============

To be a useful platform for everyone everywhere, translations are critical. If you have knowledge or expertise in languages other than English, we could use your help to translate the platform to other languages.

`Getting Started with Translating.`_

.. _Getting Started with Translating.: https://edx.readthedocs.io/projects/edx-developer-guide/en/latest/internationalization/i18n_translators_guide.html

..
    Put this back in when we have more information to put here.
    Documentation
    =============

    ...Some words… link to where the big todo list is.

Bug Fixes
=========
Have you been using or operating or using an Open edX site and found a bug you want to fix? We would love your help!

A few things you need to know:

* `The contribution process.`_
* `How to setup a development environment.`_
* `How the code is laid out.`_
* `How to ask for help.`_

.. _The contribution process.: https://edx.readthedocs.io/projects/edx-developer-guide/en/latest/process/overview.html
.. _How to setup a development environment.: https://edx.readthedocs.io/projects/open-edx-devstack/en/latest/readme.html
.. _The contribution process.: https://edx.readthedocs.io/projects/edx-developer-guide/en/latest/process/overview.html
.. _Devstack: https://edx.readthedocs.io/projects/open-edx-devstack/en/latest/readme.html#getting-started
.. _How to ask for help.: https://open.edx.org/community/connect/
.. _How the code is laid out.: https://edx.readthedocs.io/projects/edx-developer-guide/en/latest/architecture.html

New Features
============

Got a great idea for how to improve the platform? The more the merrier! The Open edX platform can be added to in many different ways. Take a look at the options below and come talk to us if you're not sure which one is the best for you.

Ways of Adding new Features to the Open edX Platform
----------------------------------------------------

New XBlock
^^^^^^^^^^

XBlocks build on top of a well-defined interface in the Open edX platform and do not require review from the Open edX team.
If you want to add a new problem type or content presentation that would be shown to a learner as a part of a course, you probably want to build a new XBlock.

Before you do that, check out XBlocks `that others have built`_ in case they fulfill your needs.

If you're ready to build one, check out our `Intro to XBlocks`_

.. _that others have built: https://openedx.atlassian.net/wiki/spaces/COMM/pages/43385346/XBlocks+Directory
.. _Intro to XBlocks: https://openedx.atlassian.net/wiki/spaces/PLAT/pages/33358554/XBlocks

New Plugin
^^^^^^^^^^

Plugins can be built independently of the core platform and do not require review from the Open edX team to build or use.
If you want to add a new feature outside of courseware (learner/educator/operator experience) a new platform plugin might be a great option for you.

Check out `this overview of our Django plugin design <https://github.com/edx/edx-django-utils/blob/master/edx_django_utils/plugins/docs/decisions/0001-plugin-contexts.rst>`_ to get started.

New update to the core platform
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

If we don't have extension points for the kind of change you want to make, you might need to make a change to the core source.
This can be complex and we encourage you to `reach out to us`_ to talk about the kind of changes you want to make.

Other useful things you need to know:

* `The contribution process.`_
* `How to setup a development environment.`_
* `How the code is laid out.`_
* `How to ask for help.`_

.. _reach out to us: https://open.edx.org/community/connect/

Other General Docs
##################

Architecture and Best Practices
===============================

.. list-table::

   * - `Open edX Technology Radar <https://radar.thoughtworks.com/?sheetId=https%3A%2F%2Fopenedx.github.io%2Fopenedx-tech-radar%2Fopen-edx-primary-radar.csv>`_
     - A bird's eye view of the decisions, tools and technologies that have been adopted or rejected for Open edX
       development.

   * - `Open edX Proposals <https://open-edx-proposals.readthedocs.io/en/latest/>`_
     - Technical decisions made by the Open edX community, in the form of best practices, architecture design,
       or development processes.

   * - `Architecture and Engineering Confluence page <https://openedx.atlassian.net/wiki/spaces/AC/overview>`_
     - Confluence page for notes, thoughts, and project-related documents on Open edX architecture and engineering.

   * - :doc:`micro_frontends/index`
     - General guidelines for developing micro-frontends in the Open edX platform.

   * - `(Legacy) Open edX Developer's Guide <https://edx.readthedocs.io/projects/edx-developer-guide/en/latest/>`_
     - General guidelines for developing on various parts of the Open edX code base.

Open edX Development
====================

.. list-table::

   * - `Devstack`_
     - The local development environment for developing in the Open edX
       platform.

   * - `Open edX Named Releases <named_releases.html>`_
     - Information on each stable Open edX named release.

   * - `Open edX Extensions and APIs <https://open.edx.org/extending-edx>`_
     - Landing page for supported APIs and extensions to the Open edX platform.

.. _Devstack: https://edx.readthedocs.io/projects/open-edx-devstack/en/latest/readme.html#getting-started
