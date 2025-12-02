function match(usefulness, months) {
    let needs = 100;
    for (let i = 0; i < months; i++) {
        needs *= 0.85;
    }
    
    let totalUsefulness = 0;
    for (let i = 0; i < usefulness.length; i++) {
        totalUsefulness += usefulness[i];
    }
    
    return totalUsefulness >= needs ? "Match!" : "No match!";
}