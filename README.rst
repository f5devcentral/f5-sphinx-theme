F5 Sphinx Theme
===============

Introduction
------------
This repo contains a F5 Networks branded `sphinx <http://www.sphinx-doc.org/en/stable/index.html>`_ theme to assist with documentation production and delivery for projects already using Sphinx documentation.

Setup and Configuration
-----------------------
1. Download or ``git clone`` the f5-sphinx-theme.
2. ``pip install .`` from the base directory just created.
3. ``pip install -r requirements.txt`` to ensure dependencies are present.
4. Add ``f5-sphinx-theme`` to the "import" section of your project's ``conf.py`` the theme import. ::

    import f5_sphinx_theme

5. Configure the ``html_theme`` and ``html_theme_theme_path()`` as shown below. ::

    html_theme = 'f5_sphinx_theme'
    html_theme_path = f5_sphinx_theme.get_html_theme_path()

6. (Optional) Configure the ``html_sidebars`` option. See the `sphinx documentation <http://www.sphinx-doc.org/en/stable/config.html#confval-html_sidebars>`_ for more information. ::

    html_sidebars = {'**': ['searchbox.html', 'localtoc.html']}

Depending on your publication / deployment process you may have to re-build your documentation for the changes to take effect.

Customizing CSS and Assets
--------------------------
The css styling for the project uses two css files: 

- ``f5.css`` contains F5's core bootstrap customizations and fonts. 
- ``custom.css`` can be used for any modifications you'd like to make for your documentation to make content easier to navigate and reference. Bear in mind that all mods must still comply with the F5 Corporate Branding strategy and requirements.

After customizing the ``custom.css`` file, you'll have to uninstall the theme and reinstall it to apply your changes.

::

    pip uninstall f5-sphinx-theme
    pip install .


Copyright
---------
Copyright 2017 F5 Networks, Inc.
