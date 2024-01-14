const list = document.querySelector('.list');
const wrapper = document.querySelector('.wrapper')

const students = []


async function download(){

    const token = JSON.parse(localStorage.getItem('data')).token;

    const response = await fetch('https://d4033904182f2496.mokky.dev/users', {
        method: "GET",
        headers: { 
            Authorization: `Bearer ${token}` 
          }
    })
    const data = await response.json()

    data.forEach(item => students.push(item))

    students.forEach(student => {
        
        const listTemplate = `
                        <ul class="list">
                            <li class="list__item">
                                <span>Ati: </span>
                                <div>${student.name}</div>
                            </li>
                            <li class="list__item">
                                <span>Familiyasi: </span>
                                <div>${student.lastName}</div>
                            </li>   
                            <li class="list__item">
                                <span>Email: </span>
                                <div>${student.email}</div>
                            </li>
                        </ul>`;
    
        wrapper.insertAdjacentHTML('beforeend', listTemplate);
    })
}
download()




