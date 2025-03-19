document.addEventListener('DOMContentLoaded', function() {
    const modelViewer = document.querySelector('model-viewer');
    const rotateLeftBtn = document.getElementById('rotate-left');
    const rotateRightBtn = document.getElementById('rotate-right');
    const zoomInBtn = document.getElementById('zoom-in');
    const zoomOutBtn = document.getElementById('zoom-out');
    const arPrompt = document.querySelector('.ar-prompt');

    // Configurações de rotação e zoom
    const ROTATION_SPEED = 30;
    const ZOOM_FACTOR = 0.2;
    let currentOrbitAngle = 0;
    let currentZoomLevel = 105;

    // Função para atualizar a órbita da câmera
    function updateCameraOrbit() {
        modelViewer.cameraOrbit = `${currentOrbitAngle}deg 75deg ${currentZoomLevel}%`;
    }

    // Rotação para a esquerda
    rotateLeftBtn.addEventListener('click', () => {
        currentOrbitAngle = (currentOrbitAngle - ROTATION_SPEED) % 360;
        updateCameraOrbit();
    });

    // Rotação para a direita
    rotateRightBtn.addEventListener('click', () => {
        currentOrbitAngle = (currentOrbitAngle + ROTATION_SPEED) % 360;
        updateCameraOrbit();
    });

    // Zoom in
    zoomInBtn.addEventListener('click', () => {
        if (currentZoomLevel > 50) {
            currentZoomLevel -= ZOOM_FACTOR * 100;
            updateCameraOrbit();
        }
    });

    // Zoom out
    zoomOutBtn.addEventListener('click', () => {
        if (currentZoomLevel < 400) {
            currentZoomLevel += ZOOM_FACTOR * 100;
            updateCameraOrbit();
        }
    });

    // Gerenciamento da barra de progresso
    const progressBar = document.querySelector('.progress-bar');
    const updateBar = document.querySelector('.update-bar');

    modelViewer.addEventListener('progress', (event) => {
        const progress = event.detail.totalProgress;
        updateBar.style.width = `${progress * 100}%`;
        
        if (progress === 1) {
            progressBar.classList.add('hide');
        } else {
            progressBar.classList.remove('hide');
        }
    });

    // Eventos AR
    modelViewer.addEventListener('ar-status', (event) => {
        if (event.detail.status === 'not-presenting') {
            arPrompt.style.opacity = '1';
        } else if (event.detail.status === 'session-started') {
            arPrompt.style.opacity = '0';
        }
    });

    // Verificação de suporte a AR
    if (modelViewer.canActivateAR) {
        console.log('AR é suportado neste dispositivo');
    } else {
        console.log('AR não é suportado neste dispositivo');
        const arButton = modelViewer.querySelector('button[slot="ar-button"]');
        if (arButton) {
            arButton.style.display = 'none';
        }
        arPrompt.style.display = 'none';
    }

    // Tratamento de erros
    modelViewer.addEventListener('error', (error) => {
        console.error('Erro ao carregar o modelo:', error);
        alert('Ocorreu um erro ao carregar o modelo 3D. Por favor, tente novamente mais tarde.');
    });

    // Feedback de carregamento do modelo
    modelViewer.addEventListener('load', () => {
        console.log('Modelo 3D carregado com sucesso');
    });
}); 