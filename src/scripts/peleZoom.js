import { enableZoom } from 'https://esm.sh/pele';

document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('.pele-container');
    
    containers.forEach(container => {
        enableZoom(container, {
            always: true,      // Allows zoom even if the diagram fits the container
            maxScale: 4,       // Sets the max scale limit (default is 3)
            controls: true     // Renders the built-in zoom buttons (+, -, reset)
        });
    });
});