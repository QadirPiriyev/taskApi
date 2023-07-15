
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        const endpointTable = document.getElementById('endpointTable');
        const tbody = endpointTable.getElementsByTagName('tbody')[0];

        data.forEach(post => {
          const row = tbody.insertRow();
          const idCell = row.insertCell();
          const titleCell = row.insertCell();
          const userIdCell = row.insertCell();

          idCell.innerHTML = post.id;
          titleCell.innerHTML = post.title;
          userIdCell.innerHTML = post.userId;
        });
      })
      .catch(error => console.log(error));

