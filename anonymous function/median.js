//Return median of two sorted arrays of the same size


const findMedianSortedArrays = (function() {
    return function(nums1, nums2) {
        const merged = [...nums1, ...nums2].sort((a, b) => a - b);
        const mid = merged.length / 2;

        if (merged.length % 2 === 0) {
            return (merged[mid - 1] + merged[mid]) / 2;
        } else {
            return merged[Math.floor(mid)];
        }
    };
})();


const nums1 = [1, 3];
const nums2 = [2, 4];
const median = findMedianSortedArrays(nums1, nums2);
console.log(median);
