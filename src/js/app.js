import 'modern-normalize';
// import axios from 'axios';

// axios.defaults.baseURL = 'https://62584f320c918296a49543e7.mockapi.io';

// function fetchMaterials() {
//   return axios.get('/materials').then(response => response.data);
// }

// fetchMaterials()
//   .then(materials => console.log(materials))
//   .catch(error => console.log(error));

// axios
//   .post('/materials', {
//     title: 'super title',
//     link: 'super link',
//     image: 'super image',
//   })
//   .then(response => console.log(response.data))
//   .catch(error => console.log(error));

const options = {
  rootMargin: '200px',
  threshold: 1.0,
};

let count = 1;

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log(entry);
      // 1. Делаем HTTP-запрос
      // 2. Добавляем разметку
      document.querySelector('main').insertAdjacentHTML(
        'beforeend',
        ` <section>
      <h2>${count++} - Lorem ipsum dolor sit amet.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        totam sed praesentium delectus, exercitationem labore nobis sunt
        distinctio sequi tempore quam, inventore animi hic blanditiis beatae
        aliquid nihil iure molestias. Ut provident repellendus, repudiandae
        veritatis ea nam animi delectus, possimus cum quae inventore explicabo
        atque nostrum ratione culpa vitae placeat adipisci sint temporibus
        numquam blanditiis eos cumque neque impedit? Dolore quis nostrum natus
        officia dolor, quam hic, sunt reprehenderit omnis sit dolorum vel quod
        optio laudantium ad voluptatem corrupti necessitatibus impedit.
        Officiis ipsum quasi laborum, velit, minima distinctio ducimus soluta
        quos, blanditiis praesentium explicabo assumenda nihil accusamus
        consequuntur dolores exercitationem harum. Vel, illum veniam
        voluptatem ab exercitationem quo doloremque itaque. Corrupti, rerum
        quod repellendus magni maxime repudiandae cupiditate dolores dolorum!
        Officia culpa veniam consequatur alias, quae quasi aspernatur
        obcaecati tenetur maxime in accusantium laborum exercitationem
        consectetur, laudantium accusamus non. Architecto accusamus velit
        repellat tempora porro est quisquam atque inventore doloremque quae?
        Nulla tempora inventore cumque consectetur repellat, asperiores dicta
        laudantium dolores eligendi labore rerum deserunt facilis! Commodi
        libero dolores iusto cum. Dolorum magni quisquam quod repudiandae cum
        aperiam perspiciatis magnam fuga facere ex unde hic, debitis doloribus
        ab, est atque, ad earum quasi voluptas omnis quibusdam tenetur animi
        doloremque dolorem.
      </p>
      <p>
        Repudiandae animi iste dicta veniam error accusantium, voluptatum
        recusandae perferendis suscipit rerum omnis iusto quod dignissimos?
        Voluptatum quibusdam soluta nostrum cum eveniet maiores deleniti quia
        mollitia minus est sit, nisi, officiis provident quis unde numquam ea
        consequuntur labore dolore quos illum nobis cumque dolorem voluptates.
        Vel aspernatur assumenda neque velit voluptatem, quo nemo quis at
        tenetur officia, totam temporibus rerum beatae nobis, corrupti cumque
        impedit distinctio dolorem quas. Rerum, maxime alias. Accusamus
        laborum ipsa animi distinctio libero harum nihil? At fugiat veritatis
        est ex totam praesentium expedita aspernatur consectetur a laboriosam.
        Repudiandae, labore. Quis delectus ratione harum dolorum accusantium,
        atque nulla. Dignissimos consequatur ea adipisci eligendi labore omnis
        debitis autem cupiditate ipsum quos aliquid harum ratione, ad ipsa
        vitae. Recusandae harum atque inventore porro minima fuga similique
        sit ut laborum esse, voluptate consequatur. Aperiam quibusdam velit
        repellendus doloribus quidem! Sequi iste voluptate iusto ea in
        doloremque amet vero voluptates illum nemo. In reprehenderit delectus
        sit eligendi aliquam. Ratione ex est amet molestiae rem praesentium
        inventore maiores ullam. Perspiciatis, nisi. Incidunt sit laudantium
        non tempore eius delectus nostrum voluptate praesentium. Quis quaerat
        rem illo dolor aspernatur nobis impedit provident non consequuntur
        sapiente, repellendus eveniet quo, fuga adipisci dolorum voluptate
        nemo libero?
      </p>
    </section>`
      );
    }
  });
}, options);

observer.observe(document.querySelector('.scroll-guard'));
