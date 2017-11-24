//On Add Row
row.Item = "iPhone X";

//On Delete Row
input.Total_Amount = (ifnull(input.Total_Amount,0.0)  -  ifnull(row.Line_Total,0.0));

//On User Input of Quantity
row.Line_Total = (ifnull(row.Quantity,0)  *  ifnull(row.Price,0.0));
temp_total = 0.0;
for each row_rec in Purchase_Line_Items
{
    temp_total = (temp_total  +  row_rec.Line_Total);
}
input.Total_Amount = temp_total;
//https://raw.githubusercontent.com/aorborc/learn-deluge/master/subform.js