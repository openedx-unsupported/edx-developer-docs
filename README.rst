edx-developer-docs
=============================

|travis-badge| |doc-badge| |license-badge|

Overview
--------

This repository contains any cross-repository Open edX developer documentation.  It also
includes references to other developer documentation.

Documentation
-------------

The full documentation is at https://edx-developer-docs.readthedocs.org.

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

How To Contribute To This Repository
-------------------------------------

Contributions are very welcome.

Please read :ref:`Contributing to Open edX developer documentation` for details.

Even though they were written with ``edx-platform`` in mind, the guidelines
should be followed for Open edX code in general.

PR description template should be automatically applied if you are sending PR from github interface; otherwise you
can find it it at `PULL_REQUEST_TEMPLATE.md <https://github.com/edx/edx-developer-docs/blob/master/.github/PULL_REQUEST_TEMPLATE.md>`_

Reporting Security Issues
-------------------------

Please do not report security issues in public. Please email security@edx.org.

Getting Help
------------

Have a question about this repository, or about Open edX in general?  Please
refer to this `list of resources`_ if you need any assistance.

.. _list of resources: https://open.edx.org/getting-help


.. |travis-badge| image:: https://travis-ci.com/edx/edx-developer-docs.svg?branch=master
    :target: https://travis-ci.com/edx/edx-developer-docs
    :alt: Travis

.. |doc-badge| image:: https://readthedocs.org/projects/edx-developer-docs/badge/?version=latest
    :target: http://edx-developer-docs.readthedocs.io/en/latest/
    :alt: Documentation

.. |license-badge| image:: https://img.shields.io/github/license/edx/edx-developer-docs.svg
    :target: https://github.com/edx/edx-developer-docs/blob/master/LICENSE.txt
    :alt: License
