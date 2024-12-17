var findRepeatedDnaSequences = function(s) {
    if(s.length < 10) return []

    const sequenceCount = new Map()
    const result = []   

    for(let i=0;i<=s.length-10;i++) {
        const sequence = s.substring(i,i+10);
        console.log("Sequence:",sequence)

        console.log((sequenceCount.get(sequence) || 0))

        sequenceCount.set(sequence,(sequenceCount.get(sequence) || 0) + 1)

        console.log(sequenceCount)

        if(sequenceCount.get(sequence) === 2) {
            result.push(sequence)
        }
    } 

    return result    
};

console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"))