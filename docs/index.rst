####################################
Open edX Developer Documentation Hub
####################################

Welcome new and returning Open edX developers! 

This is the central repository for documentation that will help you work with Open edX code. 

..
   Alternating the index page content with small chunks of the TOC 
   is the approach used by readthedocs themselves, 
   so I've adopted it here. - AEB
..

New to edX? Start here.
-----------------------

  :doc: `Our mission </new_to_edx/mission>` 
  :doc: `What our systems do </new_to_edx/what_our_systems_do>`
  :doc: `How we represent real-world data </new_to_edx/data_model>`
  :doc: `Our internal messaging model </new_to_edx/messaging_model>`
  :doc: `What you should read next </new_to_edx/what_to_read_next>`

..
  If a page is linked on the body of the home page it should appear in the TOC
  as well.
..

.. toctree::
   :maxdepth: 4
   :caption: New to edX?

   /new_to_edx/mission
   /new_to_edx/what_our_systems_do
   /new_to_edx/data_model
   /new_to_edx/messaging_model
   /new_to_edx/what_to_read_next

Information for all Open edX developers
---------------------------------------

  :doc: `System requirements for development devices </all_development/system_requirements>`
  :doc: `Setting up your development environment </all_development/setting_up_dev_envt>`
  :doc: `Finding the correct GitHub repository </all_development/finding_the_correct_github_repo>`

.. toctree::
   :maxdepth: 4
   :caption: Information for all Open edX developers

   /all_development/system_requirements
   /all_development/setting_up_dev_envt
   /all_development/finding_the_correct_github_repo


Extending the core Open edX platform
------------------------------------

  :doc: `What can you extend? </extending/what_can_you_extend>` 


.. toctree::
   :maxdepth: 4
   :caption: Extending the core platform

   /extending/what_can_you_extend  

.. 
  Search components are not included in Open edX RST files by default. Should
  they be?
..

Indices and tables
==================

* :ref:`genindex`
* :ref:`modindex`
* :ref:`search`




..

This the landing page for documentation relevant to developers of the Open edX platform.  For other documentation
resources targeted for edX learners, educators, researchers, and Open edX operators, see `docs.edx.org <docs.edx.org>`_.

.. toctree::
    :hidden:

    Open edX Proposals <https://open-edx-proposals.readthedocs.io/en/latest/>
    developers_guide/index
    named_releases
    Open edX Extensions and APIs <https://open.edx.org/extending-edx>
    (Legacy) Open edX Developer's Guide <https://edx.readthedocs.io/projects/edx-developer-guide/en/latest/>


Architecture and Best Practices
-------------------------------

.. list-table::

   * - Open edX Technology Radar (coming...)
     - A bird's eye view of the decisions, tools and technologies that have been adopted or rejected for Open edX
       development.

   * - `Open edX Proposals <https://open-edx-proposals.readthedocs.io/en/latest/>`_
     - Technical decisions made by the Open edX community, in the form of best practices, architecture design,
       or development processes.

   * - `Architecture and Engineering Confluence page <https://openedx.atlassian.net/wiki/spaces/AC/overview>`_
     - Confluence page for notes, thoughts, and project-related documents on Open edX architecture and engineering.

   * - `(New) Open edX Developer's Guide <developers_guide/index.html>`_
     - General guidelines for developing on various parts of the Open edX code base.

   * - `(Legacy) Open edX Developer's Guide <https://edx.readthedocs.io/projects/edx-developer-guide/en/latest/>`_
     - General guidelines for developing on various parts of the Open edX code base.

Open edX Development
--------------------

.. list-table::

   * - `Open edX Named Releases <named_releases.html>`_
     - Information on each stable Open edX named release.

   * - `Open edX Extensions and APIs <https://open.edx.org/extending-edx>`_
     - Landing page for supported APIs and extensions to the Open edX platform.
..
