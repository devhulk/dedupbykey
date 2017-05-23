# dedupbykey
twitter : @dev_hulk

## Install dedupbykey
```
npm i -g dedupbykey
```

## Instructions

So pass in your arguments and dedupify your array of objects.

## Use

from the command line...

```
dedupbykey <file> <key>
```

## Example

*Input*

```
{
    _id : '5153645'
    serialnumber : '12345'
}
{
    _id : '8778653'
    serialnumber : '12345'
}
```

*Run Command*

```
dedupbykey examplefile.json serialnumber 
```

*Output*

```
{
    _id : ''
    serialnumber : '12345'
}
```

Use a redirect to put output in file

```
dedupbykey examplefile.json serialnumber > nodup.json
```

