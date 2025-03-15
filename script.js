// Дефолтные данные (если localStorage пуст)
const defaultData = {
  contact: {
    email: "valerachechin@gmail.com",
    address: "Michelstadter Weg 77C, 13587 Berlin",
    phone: "+49 176 355 19 613",
    birthdate: "24. März 1972",
    nationality: "Ukrainisch"
  },
  kompetenzen: [
    "High-End Audio-/Video-Systeme",
    "Multiroom- und Heimkino-Lösungen",
    "Planung und Installation von Systemen"
  ],
  sprachkenntnisse: ["Deutsch: B1", "Englisch: A2", "Ukrainisch: C1", "Russisch: C1"],
  arbeitszeit: ["Vollzeit", "Teilzeit", "Flexible Arbeitszeiten"],
  fuhrerschein: ["Klasse B", "Klasse C"],
  name: "Valerii Chechin",
  specialization: "Audio-Video-Systemingenieur und Projektleiter mit Spezialisierung auf High-End-Systeme",
  berufserfahrung: {
    title: "Audio-Video-Systemingenieur und Projektleiter",
    company: "Gramophone",
    location: "Odesa, Ukraine",
    dates: "Jul 1996 – Feb 2022",
    tasks: [
      "Planung und Leitung von über 50 kundenspezifischen Projekten im Bereich Heimkino und Multiroom-Systeme.",
      "Erfolgreiche Integration von Steuerungslösungen für anspruchsvolle Kunden."
    ]
  },
  ausbildung: {
    degree: "Hochschulabschluss in Radioelektronik",
    university: "Odessa Staatliche Polytechnische Universität",
    location: "Odesa, Ukraine",
    dates: "Sep 1990 – Aug 1995"
  },
  zertifizierungen: ["Control4 (Schulung bei Melodia Ltd.)", "HTML, CSS (GoIT)"],
  projekte: [
    { title: "Beautiful Showroom in Ukraine", url: "https://steinwaylyngdorf.com/case-beautiful-showroom-in-ukraine/" },
    { title: "Kadorr Hotel & Resort", url: "https://kadorrhotels.com/?lang=en" }
  ]
};

// Функция для заполнения резюме
function populateResume(data) {
  document.getElementById('email').textContent = data.contact.email;
  document.getElementById('address').textContent = data.contact.address;
  document.getElementById('phone').textContent = data.contact.phone;
  document.getElementById('birthdate').textContent = data.contact.birthdate;
  document.getElementById('nationality').textContent = data.contact.nationality;

  document.getElementById('name').textContent = data.name;
  document.getElementById('specialization').textContent = data.specialization;

  const fillList = (id, items) => {
    const ul = document.getElementById(id);
    ul.innerHTML = ''; // Очищаем список
    items.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      ul.appendChild(li);
    });
  };

  fillList('kompetenzen', data.kompetenzen);
  fillList('sprachkenntnisse', data.sprachkenntnisse);
  fillList('arbeitszeit', data.arbeitszeit);
  fillList('fuhrerschein', data.fuhrerschein);
  fillList('berufserfahrung-tasks', data.berufserfahrung.tasks);
  fillList('zertifizierungen', data.zertifizierungen);

  const projekteUl = document.getElementById('projekte');
  projekteUl.innerHTML = '';
  data.projekte.forEach(projekt => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = projekt.url;
    a.className = 'project-link';
    a.target = '_blank';
    a.textContent = projekt.title;
    li.appendChild(a);
    projekteUl.appendChild(li);
  });

  document.getElementById('berufserfahrung-title').textContent = data.berufserfahrung.title;
  document.getElementById('berufserfahrung-company').textContent = data.berufserfahrung.company;
  document.getElementById('berufserfahrung-location').textContent = data.berufserfahrung.location;
  document.getElementById('berufserfahrung-dates').textContent = data.berufserfahrung.dates;

  document.getElementById('ausbildung-degree').textContent = data.ausbildung.degree;
  document.getElementById('ausbildung-university').textContent = data.ausbildung.university;
  document.getElementById('ausbildung-location').textContent = data.ausbildung.location;
  document.getElementById('ausbildung-dates').textContent = data.ausbildung.dates;
}

// Загрузка данных из localStorage или дефолтных
const savedData = JSON.parse(localStorage.getItem('resumeData')) || defaultData;
populateResume(savedData);

// Показать/скрыть форму
document.getElementById('edit-btn').addEventListener('click', () => {
  const form = document.getElementById('edit-form');
  form.style.display = 'block';

  // Заполняем форму текущими данными
  document.getElementById('form-name').value = savedData.name;
  document.getElementById('form-specialization').value = savedData.specialization;
  document.getElementById('form-email').value = savedData.contact.email;
  document.getElementById('form-address').value = savedData.contact.address;
  document.getElementById('form-phone').value = savedData.contact.phone;
  document.getElementById('form-birthdate').value = savedData.contact.birthdate;
  document.getElementById('form-nationality').value = savedData.contact.nationality;
  document.getElementById('form-kompetenzen').value = savedData.kompetenzen.join(', ');
  document.getElementById('form-sprachkenntnisse').value = savedData.sprachkenntnisse.join(', ');
  document.getElementById('form-arbeitszeit').value = savedData.arbeitszeit.join(', ');
  document.getElementById('form-fuhrerschein').value = savedData.fuhrerschein.join(', ');
  document.getElementById('form-berufserfahrung-title').value = savedData.berufserfahrung.title;
  document.getElementById('form-berufserfahrung-company').value = savedData.berufserfahrung.company;
  document.getElementById('form-berufserfahrung-location').value = savedData.berufserfahrung.location;
  document.getElementById('form-berufserfahrung-dates').value = savedData.berufserfahrung.dates;
  document.getElementById('form-berufserfahrung-tasks').value = savedData.berufserfahrung.tasks.join(', ');
  document.getElementById('form-ausbildung-degree').value = savedData.ausbildung.degree;
  document.getElementById('form-ausbildung-university').value = savedData.ausbildung.university;
  document.getElementById('form-ausbildung-location').value = savedData.ausbildung.location;
  document.getElementById('form-ausbildung-dates').value = savedData.ausbildung.dates;
  document.getElementById('form-zertifizierungen').value = savedData.zertifizierungen.join(', ');
  document.getElementById('form-projekte').value = savedData.projekte.map(p => `${p.title},${p.url}`).join(';');
});

document.getElementById('close-form').addEventListener('click', () => {
  document.getElementById('edit-form').style.display = 'none';
});

// Обработка сохранения формы
document.getElementById('resume-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const newData = {
    contact: {
      email: document.getElementById('form-email').value,
      address: document.getElementById('form-address').value,
      phone: document.getElementById('form-phone').value,
      birthdate: document.getElementById('form-birthdate').value,
      nationality: document.getElementById('form-nationality').value
    },
    kompetenzen: document.getElementById('form-kompetenzen').value.split(',').map(item => item.trim()),
    sprachkenntnisse: document.getElementById('form-sprachkenntnisse').value.split(',').map(item => item.trim()),
    arbeitszeit: document.getElementById('form-arbeitszeit').value.split(',').map(item => item.trim()),
    fuhrerschein: document.getElementById('form-fuhrerschein').value.split(',').map(item => item.trim()),
    name: document.getElementById('form-name').value,
    specialization: document.getElementById('form-specialization').value,
    berufserfahrung: {
      title: document.getElementById('form-berufserfahrung-title').value,
      company: document.getElementById('form-berufserfahrung-company').value,
      location: document.getElementById('form-berufserfahrung-location').value,
      dates: document.getElementById('form-berufserfahrung-dates').value,
      tasks: document.getElementById('form-berufserfahrung-tasks').value.split(',').map(item => item.trim())
    },
    ausbildung: {
      degree: document.getElementById('form-ausbildung-degree').value,
      university: document.getElementById('form-ausbildung-university').value,
      location: document.getElementById('form-ausbildung-location').value,
      dates: document.getElementById('form-ausbildung-dates').value
    },
    zertifizierungen: document.getElementById('form-zertifizierungen').value.split(',').map(item => item.trim()),
    projekte: document.getElementById('form-projekte').value.split(';').map(item => {
      const [title, url] = item.split(',').map(i => i.trim());
      return { title, url };
    })
  };

  localStorage.setItem('resumeData', JSON.stringify(newData));
  populateResume(newData);
  document.getElementById('edit-form').style.display = 'none';
});