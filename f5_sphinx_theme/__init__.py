import os


__version__ = "0.1.0"


def get_html_theme_path():
    """Return the html theme path for this template library.

    :returns: List of directories to find template files in
    """
    curdir = os.path.abspath(os.path.dirname(os.path.dirname(__file__)))
    return [curdir]
