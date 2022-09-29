const fizzbuzz = () => {
  for (i = 0; i< 100; ++i){
    if(i%3==0){
      console.log("fizz");
    }
    else if (i%5==0){
      console.log('buzz')
    }
    else{
     console.log(i); 
    }
  }
};

fizzbuzz();
// 1
// 2
// fizz
// 4
// buzz
// fizz
// 7
// 8
// fizz
// buzz
// 11
// fizz
// 13
// 14
// fizzbuzz
// ...
