**********************************
Overriding Brand Specific Elements
**********************************

MFEs contain Open edX branded headers, footers and style. To build a MFE to reflect the brand of the particular Open edX instance some npm dependencies are designed to be overridden. **Overriding packages must expose the same interface as the dependencies they are overriding**.

Example: for edx.org the Open edX @edx/frontend-component-header is overridden with @edx/frontend-component-header-edx using npm aliases (`introduced in npm version 6.9.0 <https://github.com/npm/rfcs/blob/latest/implemented/0001-package-aliases.md>`_). Example syntax below:

.. code-block:: bash

  # Syntax: npm install <package-name>@<type>:<branded-package>

  # npm package
  npm install @edx/frontend-component-header@npm:@edx/frontend-component-header-edx@latest

  # git repository
  npm install @edx/frontend-component-header@git://github.com/edx/frontend-component-header-edx.git

  # local folder
  npm install @edx/frontend-component-header@file:../path/to/local/module

A list overridable packages is being developed. Currently only `@edx/frontend-component-header <https://github.com/edx/frontend-component-header>`_ and `@edx/frontend-component-footer <https://github.com/edx/frontend-component-footer>`_ are designed to be overridden. See those repositories for the interfaces they expose.
