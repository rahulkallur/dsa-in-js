# Write your MySQL query statement below
select name as `Customers` from Customers left join Orders on Customers.Id=Orders.CustomerId where Orders.CustomerId is NULL 