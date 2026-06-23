class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let sub_string = "";
        let max =0;

        for(let i=0;i<s.length;i++)
        {
            const index_of_current = sub_string.indexOf(s[i]);
            if(index_of_current !== -1)
            {
                sub_string = sub_string.slice(index_of_current+1) + s[i];
            }
            else
            {
                sub_string = sub_string + s[i];
            }

            max = Math.max(max,sub_string.length);
        }
        return max;
    }
}
