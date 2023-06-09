document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.item');
    const container2 = document.querySelector('.container:nth-child(2)');
    const resetBtn = document.getElementById('resetBtn');
  
    // Add event listeners to each item
    items.forEach(function(item) {
      item.addEventListener('dragstart', dragStart);
      item.addEventListener('dragend', dragEnd);
    });
  
    // Container 2 event listeners
    container2.addEventListener('dragover', dragOver);
    container2.addEventListener('dragenter', dragEnter);
    container2.addEventListener('dragleave', dragLeave);
    container2.addEventListener('drop', dragDrop);
  
    // Reset button event listener
    resetBtn.addEventListener('click', resetContainers);
  
    let draggedItem = null;
  
    // Drag Functions
    function dragStart() {
      draggedItem = this;
      setTimeout(() => (this.style.display = 'none'), 0);
    }
  
    function dragEnd() {
      setTimeout(() => (this.style.display = 'block'), 0);
      items.forEach(item => item.classList.remove('dragging'));
    }
  
    function dragOver(e) {
      e.preventDefault();
    }
  
    function dragEnter(e) {
      e.preventDefault();
      this.classList.add('hovered');
    }
  
    function dragLeave() {
      this.classList.remove('hovered');
    }
  
    
    function dragDrop() {
        this.classList.remove('hovered');
        this.appendChild(draggedItem);
        showSuccessMessage(this);
      }
  
    function resetContainers() {
      container2.innerHTML = '<h2>Container 2</h2>';
      items.forEach(item => document.querySelector('.container:first-child').appendChild(item));
    }

  
    function showSuccessMessage(container) {
        const successMsg = document.createElement('div');
        successMsg.classList.add('success');
        successMsg.textContent = 'Item dropped successfully!';
        container.appendChild(successMsg);
        setTimeout(() => {
          successMsg.remove();
        }, 2000);
      }
  });
  