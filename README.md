# dedupbykey

## Follow
twitter : @dev_hulk

## Install dedupbykey
```
npm i -g dedupbykey
```

## Instructions

So pass in your arguments and dedupify your array of objects. You can pass in multiple key arguments to dedup based on a composite key.

## Use

from the command line...

```
dedupbykey <file> <keys...>
```

## Example w/ One Key

*Input*

```
[
{
    _id : '5153645',
    serialnumber : '12345'
}
{
    _id : '8778653',
    serialnumber : '12345'
}
]
```

*Run Command*

```
dedupbykey examplefile.json serialnumber 
```

*Output*

```
[
{
    _id : '8778653',
    serialnumber : '12345'
}
]
```

Use a redirect to put output in file

```
dedupbykey examplefile.json serialnumber > nodup.json
```


## Example w/ Composite Key

*Input*

```
[
{
    _id : '5153645',
    serialnumber : '12345',
    name : 'product1'

},
{
    _id : '8778653'
    serialnumber : '12345',
    name : 'product1'
},
{
    _id : '9878684'
    serialnumber : '12345',
    name : 'otherproduct'
}
]
```

*Run Command*

```
dedupbykey examplefile.json serialnumber name
```

*Output*

```
[
{
    _id : '8778653'
    serialnumber : '12345',
    name : 'product1'
},
{
    _id : '9878684'
    serialnumber : '12345',
    name : 'otherproduct'
}
]
```

Use a redirect to put output in file

```
dedupbykey examplefile.json serialnumber > nodup.json
```