document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const dashboard = document.getElementById('dashboard');
    const auth = document.getElementById('auth');
    const deviceForm = document.getElementById('device-form');
    const deviceList = document.getElementById('device-list');

    let devices = [];

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        auth.style.display = 'none';
        dashboard.style.display = 'block';
    });

    deviceForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const deviceName = document.getElementById('device-name').value;
        devices.push(deviceName);
        document.getElementById('device-name').value = '';
        renderDevices();
    });

    function renderDevices() {
        deviceList.innerHTML = '';
        devices.forEach((device, index) => {
            const li = document.createElement('li');
            li.textContent = device;
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Supprimer';
            removeBtn.onclick = () => {
                devices.splice(index, 1);
                renderDevices();
            };
            li.appendChild(removeBtn);
            deviceList.appendChild(li);
        });
    }
});
