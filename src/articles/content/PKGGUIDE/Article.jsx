import '../../default.css';
import './theme.css';
import React from "react";
import { useScrambledTitle } from '../../ScrambledTitle';

import Navbar from '../../../components/navbar/Navbar';
import Footer from '../../../components/footer/Footer';

class Codeblock extends React.Component {
  render() {
    const code_snippet = `
    # Maintainer: Vasya Pupkin <dvorak.dwarf@gmail.com>
    pkgname=fauxnix-git
    pkgver=r64.cff5977
    pkgrel=1
    pkgdesc="Non-invasive* Reproducible* Declarative* config management for Nix non-believers"
    arch=('any')
    url="https://github.com/DvorakDwarf/fauxnix"
    license=('GPL3')
    depends=(python pacman python-ruamel-yaml)
    makedepends=(git python-setuptools  python-build python-wheel python-installer)
    provides=('fauxnix')
    conflicts=('fauxnix')
    source=("$pkgname::git+https://github.com/DvorakDwarf/fauxnix.git")
    md5sums=('SKIP')

    pkgver() {
      cd "$pkgname"
      printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short=7 HEAD)"
    }

    build() {
      cd "$pkgname"

      python -m build --wheel --no-isolation
    }

    package() {
      cd "$pkgname"

      install -Dm644 src/fauxnix/fauxnix.yaml "$pkgdir/etc/fauxnix.yaml"
      install -Dm644 LICENSE $pkgdir/usr/share/licenses/$pkgname/LICENSE
      install -Dm644 README.md $pkgdir/usr/share/doc/$pkgname/README.md
      install -Dm755 src/fauxnix.hook $pkgdir/usr/share/libalpm/hooks/fauxnix.hook

      python -m installer --destdir="$pkgdir" dist/*.whl
    }
  `

    return(
    <pre>
      <code className="language-python">
        {code_snippet}
      </code>
    </pre>);
  }
}

function Hi() {
  const meta = require("./meta.json");

  const date = new Date(meta.date).toLocaleDateString('en-us', {
    year:"numeric", 
    month:"short",
    day:"2-digit"
    }) // "Jul 2021 Friday"


  return (
    <div className="PKGBUILD">
      <Navbar />
     <article>
      <div className="cover">
        {useScrambledTitle(meta.title)}
        <time>{date}</time>
        <img className='thumbnail' src={require('./images/pkglogo.jpg')}></img>
        <hr/>
      </div>
      <main>  
        <p>
          <h2>Preface on getting help.</h2> <br/>
          If you find yourself using any of the following phrases or types of replies:
          <ul>
            <li>"Help vampire"</li>
            <li>"RTFM"</li>
            <li>(link to a wiki article with no further explanation)</li>
            <li>(a command meant to solve the issue with no comment on how it works)</li>
            <li>"Read the docs"</li>
          </ul>
          Know that every breath you take is a net negative impact on the planet. You replying 
          with nothing at all would have been a better use of everybody's time.
        </p>
        <h2>What the PKGBUILD does</h2>
        <p> 
          First, you need to understand what the PKGBUILD actually does. The way it works is it 
          opens a directory <code>pkg</code> in the same directory you used the file. Every file
          your program uses will first be placed there, <b>NOT THE SYSTEM</b>. That is why you
          must include <code>$pkgdir</code> in your paths. Once the PKGBUILD ends, pacman will
          look at the folder and copy the files into paths with the same name. 
          <code> $pkgdir/usr/bin/yourprogram</code> goes into <code>/usr/bin/yourprogram </code> 
          on the system. (You might need curly brackets around the pkgdir and pkgname variables)
        </p>
        <h2>The crucial details</h2>
        <Codeblock/>
        <p>
          Variables you must have:<br/>
          <ul>
            <li>
              pkgname: The name. Needs -git ending if taken from the git repo, -bin if installing
              binaries and not building, start with python- if it's a python library (not app)
            </li>
            <li>pkgver: The version. If using git, set in pkgver() function</li>
            <li>
              pkgrel: If you needed it you'd know. 1 by default. Increment if the same version 
              has an update
            </li>
            <li>
              arch: Architecture your software works on. 'any' for python since it's cross-platform
            </li>
            <li>
              license: Name of license. 'MIT', 'GPL', and so on
            </li>
          </ul> 
          Variables you probably need: <br/>
          <ul>
            <li>
              pkgdesc: A description of your package. 80 characters or less. 
              Do not reference the name of the package
            </li>
            <li>url: Your official site. Likely a github repo</li>
            <li>
              depends: Packages your software uses. Python libraries used included
            </li>
            <li>
              makedepends: Packages only required to build the package, not for functionality.
            </li>
            <li>
              provides/conflicts: The name of packages your package provides the function for.
              Basically means that if you have a git package, put the name without git here to 
              make sure you can't install both if you ever make one in the future
            </li>
            <li>
              source: The URL from which the files required for your package would be downloaded from.
              In the case of git, put git+ before the URL normally used to clone the repo
            </li>
            <li>
              md5sums: Verify integrity with md5. 'SKIP' if using git 
            </li>
          </ul> 
          Functions you likely need: <br/>
          <ul>
            <li>
              pkgver(): If you are using git, set the version this way. Copy one from <a href='https://wiki.archlinux.org/title/VCS_package_guidelines#Git'>arch wiki</a>
            </li>
            <li>
              build(): Build package here. <code>python -m build --wheel --no-isolation</code>
            </li>
            <li>
              package(): Shuffle all the files into the correct place here for pacman. Use the install
              script to set permissions. 644 for reading and 755 for execution. Follow my PKGBUILD 
              above for paths where files are to be placed. Here you also run python -m installer
            </li>
          </ul>
        </p>
        <h2>Note on setup.py</h2>
        <p>
          You should avoid using it. For the build step of your python project, you need 
          <code> pyproject.toml</code> file to describe how your program ought to be built. 
          It was a replacement for setup.py. It has the same features and more. Use 
          python -m installer to make use of it. I was shown python -m install . which 
          seems to do the same thing but is less popular and allows you to still use setup.py
          without explicitly calling it. I would still recommend avoiding it.
        </p>
      </main>
    </article>
    <Footer />
    </div>
  );
}

export default Hi;
