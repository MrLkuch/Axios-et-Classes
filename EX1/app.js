const main = (userid) => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${userid}`, {}).then((res)=> console.log(res));
}

main(1)
main(2)