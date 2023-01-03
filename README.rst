edx-developer-docs
=============================

|ci-badge| |doc-badge| |license-badge|

**WARNING: This repository is Archived.**

For more up-to-date documentation see: https://docs.openedx.org/en/latest/developers

Testing
-------

To test documentation changes locally, run through the following.

Install the requirements inside of a `Python virtualenv`_.

.. code:: sh

   make requirements

Then run all tests as they will be run against your PR.

.. code:: sh

   make test-all

Note: Look for warnings, which will not fail the test but are useful to clean up.

Alternatively, build the docs which should load them in your browser.

.. code:: sh

  make docs

Lastly, if you want to test external links (from the docs directory).

.. code:: sh

  cd docs
  make linkcheck

.. _Python virtualenv: https://docs.python-guide.org/en/latest/dev/virtualenvs/#lower-level-virtualenv

License
-------

The code in this repository is licensed under the AGPL 3.0 unless
otherwise noted.

Please see ``LICENSE.txt`` for details.

How To Contribute
-----------------

This repo is not currently taking new contributions.  Consider contributing to https://github.com/openedx/docs.openedx.org/

`How to Start Contributing <https://openedx.atlassian.net/wiki/spaces/COMM/pages/941457737/How+to+start+contributing+to+the+Open+edX+code+base>`_

Reporting Security Issues
-------------------------

Please do not report security issues in public. Please email security@tcril.org

Getting Help
------------

Have a question about this repository, or about Open edX in general?  Please
refer to this `list of resources`_ if you need any assistance.

.. _list of resources: https://docs.openedx.org/en/latest/other/getting_help.html

.. |ci-badge| image:: https://github.com/openedx/edx-developer-docs/actions/workflows/ci.yml/badge.svg
    :target: https://github.com/openedx/edx-developer-docs/actions/workflows/ci.yml
    :alt: Continuous Integration

.. |doc-badge| image:: https://readthedocs.org/projects/edx-developer-docs/badge/?version=latest
    :target: http://edx-developer-docs.readthedocs.io/en/latest/
    :alt: Documentation

.. |license-badge| image:: https://img.shields.io/github/license/edx/edx-developer-docs.svg
    :target: https://github.com/openedx/edx-developer-docs/blob/master/LICENSE.txt
    :alt: License
