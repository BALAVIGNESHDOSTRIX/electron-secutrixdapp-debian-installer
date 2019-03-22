# Electron-build-debian-Installer
Building the Debian Based .deb file from Electron Desktop Application for Linux( Debian Based)

#Install node_modules for the project
    1. clone the electron-secutrixdapp-debian-installer project
        git clone https://github.com/BALAVIGNESHDOSTRIX/electron-secutrixdapp-debian-installer.git

    2. change the driectory
        cd electron-secutrixdapp-debian-installer
    
    3. Install the required node_modules using following command
        npm install --save
    
    4. Run the Project using following command
        npm start
    
    5. Build the electron linux package using following command 
        npm run gen-deb-package

    6. Build the app debian file (.deb) using following command
        npm run gen-deb_linux
    
    now you the source debian file with .deb extension file is generated at the dist/debian directory. so you can install and use that sample electron app
