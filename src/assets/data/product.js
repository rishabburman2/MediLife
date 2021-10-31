import products from './products';

export default {
    id: '1',
    title: "Crocin Advance 650mg",
    introduction: `Crocin Advance Tablet is a medicine used to relieve pain and to reduce fever. It is used to treat many conditions such as headaches, body aches, toothaches, and the common cold. It works by inhibiting the release of certain chemicals that cause pain and fever.

    Crocin Advance Tablet may be prescribed alone or in combination with another medicine. You should take it regularly as advised by your doctor. It is usually best taken with food otherwise it may upset your stomach. Do not take more or use it for longer than recommended.

    Side effects are rare if this medicine is used correctly but this medicine may cause stomach pain, nausea, and vomiting in some people. Consult your doctor if any of these side effects bother you or do not go away.

    This medicine is widely prescribed and considered safe but is not suitable for everybody. Before taking it, let your doctor know if you have liver or kidney problems or are using blood-thinning medicines. It may affect the dose or suitability of this medicine. Let your doctor know about all the other medicines you are taking because they may affect, or be affected by, this medicine.`,
    uses: `- Pain Relief
    - Treatment of Fever`,
    sideEffect: `Most side effects do not require any medical attention and disappear as your body adjusts to the medicine. Consult your doctor if they persist or if you’re worried about them
    Common side effects of Crocin
    - Stomach pain
    - Nausea
    - Vomiting`,
    image: require('../images/medicine_product1.jpeg'),
    images: [
        require('../images/crocin/crocin1.jpeg'),
        require('../images/crocin/crocin2.png'),
        require('../images/crocin/crocin3.png')
    ],
    avgRating: products[1].avgRating,
    ratings: products[1].ratings,
    price: products[1].price,
    oldPrice: products[1].oldPrice,
};