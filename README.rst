F5 Sphinx Theme
===============

.. image:: https://travis-ci.org/f5devcentral/f5-sphinx-theme.svg?branch=master
   :target: https://travis-ci.org/f5devcentral/f5-sphinx-theme

The f5-sphinx-theme provides F5 Networks styling and layouts for projects built with `Sphinx <http://www.sphinx-doc.org/en/stable/index.html>`_. This theme should not be used without modification for any project that doesn't publish documentation to `clouddocs.f5.com <http://clouddocs.f5.com>`_.


Setup and Configuration
-----------------------
1. ``pip install f5-sphinx-theme``
2. Update your project's ``conf.py`` with the following settings: ::

    import f5_sphinx_theme
    html_theme = 'f5_sphinx_theme'
    html_sidebars = {'**': ['searchbox.html', 'localtoc.html', 'globaltoc.html']}

3. (Optional) Set the ``html_theme_options{}`` dictionary. Supported options are shown below. ::

    html_theme_options = {
                            'site_name': '<desired site name>',      \\ DEFAULTS TO "CloudDocs home"
                            'next_prev_link': True or False          \\ DEFAULTS TO FALSE
                         }

Depending on your publication/deployment process, you may have to re-build your documentation for the changes to take effect.


Usage
-----

See the `project wiki <https://github.com/f5devcentral/f5-sphinx-theme/wiki>`_ for more information.

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

