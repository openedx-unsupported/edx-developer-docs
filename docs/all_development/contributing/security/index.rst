#######################################
Coding for security
#######################################

**Following sound secure coding practice is critical to any successful development project.** The Open edX development community, with its long history of good open source practice, is a model for other open source communities. So any code that becomes part of our repositories should be an exemplar of sound secure coding.

At the very least, you should know how to guard against the `Open Web Application Security Project (OWASP) Top 10 web application security risks <https://owasp.org/www-project-top-ten/>`_. OWASP also maintains and updates information on `web <https://owasp.org/www-project-web-security-testing-guide/>`_ and `mobile <https://owasp.org/www-project-mobile-security-testing-guide/>`_ security testing.

The topics in this section on cross-site scripting attacks provide further information on the OWASP top 10 security vulnerabilities and ways to prevent them. One such prevention method is the :ref:`XSS Linter` included in the Open edX platform.

If you should come across a security issue in Open edX code, please report it to `security@edx.org <mailto:security@edx.org>`_.

* :doc:`preventing_xss`
* :doc:`preventing_xss_in_django_templates`
* :doc:`preventing_xss_in_react`
* :doc:`preventing_xss_strip_tags`

.. toctree::
   :hidden:
   :maxdepth: 1
   :caption: Secure coding principles and practices

   preventing_xss
   preventing_xss_in_django_templates
   preventing_xss_in_react
   preventing_xss_strip_tags
