# Hacksprint_05_SillyCons
# Hacksprint_05_SillyCons
```
Websites with Project Analysis:
```
https://kashbysillycons.herokuapp.com/
<br>
https://kashinfo.netlify.app/
```
Understanding the Problem Statement
```
Broadly, stock market analysis is divided into two parts – Fundamental Analysis and Technical Analysis.

Fundamental Analysis involves analyzing the company’s future profitability on the basis of its current business environment and financial performance.
Technical Analysis, on the other hand, includes reading the charts and using statistical figures to identify the trends in the stock market.
Stock prices come in several different flavors. They are,

Open: Opening stock price of the day
Close: Closing stock price of the day
High: Highest stock price of the data
Low: Lowest stock price of the day

```
Why Time Series Model?
```
You would like to model stock prices correctly, so as a stock buyer you can reasonably decide when to buy stocks and when to sell them to make a profit. This is where time series modelling comes in. You need good machine learning models that can look at the history of a sequence of data and correctly predict what the future elements of the sequence are going to be.

```
Dataset 
```
We extracted the dataset from Alpha Vantage Stock API. First we needed an API key After that, we assigned that key to the api_key variable. Then we cleaned the data, performed manipulation, visualization, pre-processing techniques of feature scaling and feature selection(co-relation).

```
Splitting Data into a Training set and a Test set
```
We split the data into training data and test data. We put them in variables and used scikit learn libraries which is imported using sklearn. 

```
Introduction to LSTMs: Making Stock Movement Predictions
```
Long Short-Term Memory models are extremely powerful time-series models. They can predict an arbitrary number of steps into the future. An LSTM module (or cell) has 5 essential components which allows it to model both long-term and short-term data.

```
Intro to Time Series Models
```
Forecasting is the next step where you want to predict the future values the series is going to take.
Because, forecasting a time series (like demand and sales) is often of tremendous commercial value.
In most manufacturing companies, it drives the fundamental business planning, procurement and production activities. Any errors in the forecasts will ripple down throughout the supply chain or any business context for that matter. So it’s important to get the forecasts accurate in order to save on costs and is critical to success.

```
Introduction to ARIMA Model
```
ARIMA, short for ‘Auto Regressive Integrated Moving Average’ is actually a class of models that ‘explains’ a given time series based on its own past values, that is, its own lags and the lagged forecast errors, so that equation can be used to forecast future values.
Any ‘non-seasonal’ time series that exhibits patterns and is not a random white noise can be modeled with ARIMA models.
An ARIMA model is characterized by 3 terms: p, d, q
where,
p is the order of the AR term.
q is the order of the MA term.
d is the number of differencing required to make the time series stationary.

ARIMA model in words:
Predicted Yt = Constant + Linear combination Lags of Y (upto p lags) + Linear Combination of Lagged forecast errors (upto q lags)

```
Other Models We Checeked
```
We also tried linear regression, DecisionTreeRegressor, logistic regression, RandomForest, etc.
But, they weren't as accurate as the ones we used for the prediction, so we went ahead with ARIMA and LSTM.

```
Conclusion
```
We have covered a lot of concepts starting from the very basics of forecasting,linear regression, DecisionTreeRegressor, logistic regression, RandomForest, AR, MA, and finally the ARIMA and model.
