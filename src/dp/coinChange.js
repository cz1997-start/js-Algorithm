/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// 动态规划解法
 var coinChange = function(coins, amount) {
    if(amount===0) return 0
    if(amount<0) return -1
    let dp=new Array(amount+1).fill(amount+1)
    const len=dp.length
    dp[0]=0
    for(let i=0;i<len;i++)
    {
        for(let j=0;j<coins.length;j++)
        {
            if(coins[j]<=i)
            {
                dp[i]=Math.min(dp[i],1+dp[i-coins[j]])
            }
            
        }
    }
    return dp[amount]>amount?-1:dp[amount]
};

// 递归备忘录
var coinChange1=function(coins,amount){
    let memo=[]
    function dp(n){
        if(memo[n]) return memo[n]
        if(n===0) return 0
        if(n<0) return -1
        let res=Infinity
        for(coin of coins ){
        const subProblem=dp(n-coin)
       if(subProblem===-1) continue
            res=Math.min(res,1+subProblem)
        }
        memo[n]=res
        return res===Infinity?-1:res
    }
    return dp(amount)
}

const value=coinChange1([1,2,5],11)