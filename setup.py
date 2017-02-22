from setuptools import setup
from f5_sphinx_theme import __version__


setup(
    name='f5_sphinx_theme',
    version=__version__,
    url='https://github.com/F5DevCentral/f5-sphinx-theme',
    license='Apache2',
    author='F5 Networks',
    author_email='shawn@f5.com',
    description='Sphinx theme for F5 documentation',
    long_description=open('README.rst').read(),
    zip_safe=False,
    packages=['f5_sphinx_theme'],
    package_data={'f5_sphinx_theme': [
        'theme.conf',
        '*.html',
        'static/css/*.css',
        'static/js/*.js',
        'static/fonts/*.*'
    ]},
    include_package_data=True,
    classifiers=[
        'Development Status :: 3 - Alpha',
        'License :: OSI Approved :: BSD License',
        'Environment :: Console',
        'Environment :: Web Environment',
        'Intended Audience :: Developers',
        'Programming Language :: Python :: 2.7',
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
        'Topic :: Documentation',
        'Topic :: Software Development :: Documentation',
    ],
)
