F5 Sphinx Theme
===============

.. image:: https://travis-ci.org/f5devcentral/f5-sphinx-theme.svg?branch=master
   :target: https://travis-ci.org/f5devcentral/f5-sphinx-theme

Introduction
------------
This repo contains the `sphinx <http://www.sphinx-doc.org/en/stable/index.html>`_ theme used for project documentation hosted on the `clouddocs.f5.com <http://clouddocs.f5.com>`_ site.

This theme should not be used without modification for project documentation that is not hosted on `clouddocs.f5.com <http://clouddocs.f5.com>`_.

Setup and Configuration
-----------------------
1. Download or ``git clone`` the f5-sphinx-theme.
2. ``pip install .`` from the f5-sphinx-theme base directory.
3. ``pip install -r requirements.txt`` to ensure dependencies are present.
4. Add ``f5-sphinx-theme`` to the "import" section of your project's ``conf.py`` (replace any existing theme import). ::

    import f5_sphinx_theme

5. Configure the ``html_theme`` as shown below. ::

    html_theme = 'f5_sphinx_theme'

6. Configure the ``html_sidebars`` option.

   See the `sphinx documentation <http://www.sphinx-doc.org/en/stable/config.html#confval-html_sidebars>`_ for more information. ::

    html_sidebars = {'**': ['searchbox.html', 'localtoc.html', 'globaltoc.html']}

7. (Optional) Configure the ``html_theme_options{}`` dictionary. Supported options are shown below. ::

    html_theme_options = {
                            'site_name': '<desired site name>',
                            'next_prev_link': True or False
                         }

Depending on your publication/deployment process, you may have to re-build your documentation for the changes to take effect.

Customizing CSS and Theme Assets
--------------------------------
The css styling for the project uses three css files:

- ``f5.css`` contains F5's core Bootstrap customizations and fonts.
- ``f5-theme.css`` contains the core styles for the f5-sphinx-theme.
- ``custom.css`` can be added to your project for any modifications you'd like to make for your documentation to make content easier to navigate and reference. Bear in mind that all mods must still comply with the F5 Corporate Branding strategy and requirements.

NOTE: The theme relies on Bootstrap 4 and FontAwesome 4. Changing either version may have unintended consequences.

After customizing the ``custom.css`` file, you'll have to uninstall the theme and reinstall it to apply your changes.

::

   pip uninstall f5-sphinx-theme
   pip install .

You can also use the ``extralinks.html`` file to add an extra links section to the bottom of the Table of Contents sidebar. To use it, add the file to the ``docs/_templates`` directory in your project.

Finally, the theme's layout is separated into a number of content blocks (``content``, ``f5sidebar``, and ``main``). Any of these blocks can be customized for individual projects. See the `Sphinx Templating guide <http://www.sphinx-doc.org/en/stable/templating.html>`_ for instructions.

Styling Tools
-------------

Font Awesome
````````````

The ``f5-sphinx-theme`` uses the Font Awesome integration (v4.7.0) provided in the `sphinxjp.theme.basicstrap <https://github.com/tell-k/sphinxjp.themes.basicstrap>`_ Sphinx theme/extension. [#sphinxjp]_

To use this extension in your project:

#. Add ``sphinxjp.themes.basicstrap`` to the ``extensions`` section of your project's ``conf.py``.
#. Add ``sphinxjp.themes.basicstrap`` to your project's ``requirements.txt`` file.

To add a Font Awesome icon to your docs: ::

   :fonticon:`fa fa-<icon_name>`

.. [#sphinxjp] ``sphinxjp.themes.basicstrap`` is licensed under the `MIT license <https://opensource.org/licenses/mit-license.php>`_.

Table Styling
`````````````

The ``f5-sphinx-theme`` supports use of the `Cloud Sphinx theme table styling extension <https://cloud-sptheme.readthedocs.io/en/latest/lib/cloud_sptheme.ext.table_styling.html>`_.

To use this extension:

#. Add ``cloud_sptheme.ext.table_styling`` to the ``extensions`` section of your project's ``conf.py``.
#. Add ``cloud_sptheme`` to your project's ``requirements.txt`` file.


Using specially-formatted TMSH/TMOS code blocks
```````````````````````````````````````````````

The ``f5-sphinx-theme`` has special CSS styling for TMSH/TMOS code blocks. To use: 

.. parsed-literal::

   .. admonition:: TMSH

      tmsh show sys hardware

If you're including a multi-line print-out, format it as code, as shown below:

.. parsed-literal::

   .. admonition:: TMSH

      ::

         admin@(bigip)(cfg-sync Standalone)(Active)(/mesos)# tmsh show ltm virtual
         ------------------------------------------------------------------
         Ltm::Virtual Server: basic-0_8080
         ------------------------------------------------------------------
         Status
           Availability     : unknown
           State            : enabled
           Reason           : The children pool member(s) either don't have service checking enabled, or service check results are not available yet
           CMP              : enabled
           CMP Mode         : all-cpus
           Destination      : 10.190.25.70:8080
         ...




Testing
-------

This project uses Travis-CI for CI/CD.


Copyright
---------

Copyright 2017-18 F5 Networks Inc.

License
-------

Apache V2.0
```````````

Licensed under the Apache License, Version 2.0 (the "License"); you may
not use this file except in compliance with the License. You may obtain
a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

