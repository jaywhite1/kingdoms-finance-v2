function getWeightedRand(items) {
    let totalWeight = 0;
    let i = 0;

    console.log(items[0].weight);
    console.log(items[0].id);

    // items.forEach(function(item) {
    //     totalWeight += item.weight;
    // });

    for(i; i<items.length; i++){
        totalWeight += items[i].weight;
    }
    i = 0;

    let random = Math.floor(Math.random() * totalWeight);
    console.log(totalWeight);
    console.log(random);

    while (random > 0) {
        random -= items[i].weight;
        if (random > 0) {
          i++;
        }
    }

    const res = items[i].id;
    return res;

    // for (i = 0; i < items.length; i++) {
    //   random -= items[i].weight;
    //   if (random < 0) {
    //     return items[i].id;
    //   }
    // }
}

export default getWeightedRand;
