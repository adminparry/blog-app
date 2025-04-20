# thrift

by apache

> download

http://thrift.apache.org/

> generate

``` bash
thrift --gen java xxx.thrift
```

> basic

类型

i32

i64

bool

list

等
``` thrift
#相对路径
include "./Types.thrift"
#包名
namespace cpp nmasdk.thrift.route
namespace java nmasdk.thrift.route

namespace * thrift
#结构体
struct RouteSapaIconInfo {

    /**
     * Longitude and Latitude
     */
    1:GeoPos2D position;

    /**
     * sa / pa
     */
    2:i32 iconType;
}
#服务
service ThriftLocationService {
	void setDevSlopeAngle(1:double pitch, 2:RouteSapaIconInfo yaw, 3:double roll);
	oneway void onRoadAttributeChanged(1:Types.RoadAttibute attr);
}

```