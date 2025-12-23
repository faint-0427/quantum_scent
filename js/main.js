const openBtn = document.getElementById('openModal');
const closeBtn = document.getElementById('closeModal');
const modal = document.getElementById('modalContainer');

// 모달 열기
openBtn.onclick = () => {
  modal.classList.remove('hidden');
};

// 모달 닫기
closeBtn.onclick = () => {
  modal.classList.add('hidden');
};

// 배경 클릭 시 닫기
window.onclick = (event) => {
  if (event.target === modal) {
    modal.classList.add('hidden');
  }
};