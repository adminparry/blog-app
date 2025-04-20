# mybatis-plus

https://baomidou.com/getting-started/config/

> maven

``` pom
<dependency>
    <groupId>com.baomidou</groupId>
    <artifactId>mybatis-plus-spring-boot3-starter</artifactId>
    <version>3.5.7</version>
</dependency>
```
> 分页

## AcademyLearningPathJoinBaseDTO

``` java
@Data
@NoArgsConstructor
public class AcademyLearningPathJoinBaseDTO {
    private String role;
    private Boolean sprinter;
    private String name;
    private String category;
    private int duration;
    private String type;
    private String factory;
    private String shortIntroduction;
    private Boolean isNew;
}

```

## AcademyLearningPathParam

``` java
@Data
public class AcademyLearningPathParam {
    private Integer pageNo;
    private Integer pageSize;


}

```
## XML
``` xml
<select id="getLearningDetailByPagination" resultType="com.bmw.babylon.pojo.AcademyLearningPathJoinBaseDTO"
            parameterType="com.bmw.babylon.rpa.academy.param.AcademyLearningPathParam">
        SELECT
        b."name",b."type",b.factory,b.short_introduction,b.duration,b.is_new,p."role",p.sprinter, b.category
        FROM
        academy_course_base b, academy_course_detail p
        WHERE b.id=p.course_id ${ew.customSqlSegment}
    </select>
```

## Mapper

``` java
IPage<AcademyLearningPathJoinBaseDTO> getLearningByPagination(IPage<AcademyLearningPathJoinBaseDTO> page, @Param(Constants.WRAPPER) Wrapper<AcademyMyCourseListDTO> queryWrapper);
```

## Interface

``` java
PageDTO<AcademyLearningPathJoinBaseDTO> page(PageParam pageParam, AcademyLearningPathQueryParam param);
```

## Impl

``` java
 @Override
    public PageDTO<AcademyLearningPathJoinBaseDTO> page(PageParam pageParam, AcademyLearningPathQueryParam param) {

        QueryWrapper queryWrapper = new QueryWrapper();
        IPage<AcademyLearningPathJoinBaseDTO> page = new Page<>(pageParam.getPageNo(), pageParam.getPageSize());

        IPage<AcademyLearningPathJoinBaseDTO> pagination = academyCoreMapper.getLearningByPagination(page, queryWrapper);

        PageDTO ret = PageDTO.of(pagination.getRecords(), pagination.getCurrent(), pagination.getSize(), pagination.getTotal(), pagination.getPages());

        return ret;
    }
```
QueryWrapper
说明:
      继承自 AbstractWrapper ,自身的内部属性 entity 也用于生成 where 条件
及 LambdaQueryWrapper, 可以通过 new QueryWrapper().lambda() 方法获取.


eq：等于，ne：不等于

``` java
@Test
public void contextLoads(){
        QueryWrapper<Employee> wrapper = new QueryWrapper<>();
        //eq() 等于
        wrapper.eq("last_name", "皮皮虾");
        Employee one = employeeService.getOne(wrapper);
        System.out.println(one);
}
```

gt：大于，ge：大于等于，lt：小于，le：小于等于

``` java
@Test
public void contextLoads(){
        QueryWrapper<Employee> gtWrapper = new QueryWrapper<>();
        //gt() 大于
        gtWrapper.gt("age", 27);
        List<Employee> gtList = employeeService.list(gtWrapper);
        System.out.println(gtList);

        //**********************

        QueryWrapper<Employee> geWrapper = new QueryWrapper<>();
        //ge() 大于等于
        geWrapper.ge("age", 26);
        List<Employee> geList = employeeService.list(geWrapper);
        System.out.println(geList);
}
```

between：在值1和值2之间，notBetween：不在值1和值2之间

``` java
@Test
public void contextLoads(){
        QueryWrapper<Employee> betweenWrapper = new QueryWrapper<>();
        //between() 区间的值
        betweenWrapper.between("age", 10, 20);
        List<Employee> betweenList = employeeService.list(betweenWrapper);
        System.out.println(betweenList );

        //**********************

        QueryWrapper<Employee> notBetweenWrapper = new QueryWrapper<>();
        //notBetween() 不在区间的值
        notBetweenWrapper.notBetween("age", 10, 21);
        List<Employee> notBetweenList = employeeService.list(notBetweenWrapper );
        System.out.println(notBetweenList );
}
```

like：’%值%’，notLike：’%值%’，likeLeft：’%值’，likeRight：'值%'

``` java
@Test
public void contextLoads(){
        QueryWrapper<Employee> likeWrapper = new QueryWrapper<>();
        //like() 模糊查询匹配值
        likeWrapper.like("last_name", "s");
        List<Employee> likeList = employeeService.list(likeWrapper);
        System.out.println(likeList );

        //**********************

        QueryWrapper<Employee> notLikeWrapper = new QueryWrapper<>();
        //notLike() 模糊查询不匹配值
        notLikeWrapper.notLike("last_name", "s");
        List<Employee> notLikeList = employeeService.list(notLikeWrapper);
        System.out.println(notLikeList);
}
```

isNull：字段 IS NULL，isNotNull：字段 IS NOT NULL

``` java
@Test
public void contextLoads(){
        QueryWrapper<Employee> isNullWrapper = new QueryWrapper<>();
        //isNull() 为空
        isNullWrapper.isNull("email");
        List<Employee> isNullList = employeeService.list(isNullWrapper);
        System.out.println(isNullList );

        //**********************

        QueryWrapper<Employee> isNotNullWrapper = new QueryWrapper<>();
        //isNotNull() 不为空
        isNotNullWrapper.isNotNull("last_name", "s");
        List<Employee> isNotNullList = employeeService.list(isNotNullWrapper );
        System.out.println(isNotNullList );
}
```

n：字段 IN (v0, v1, …)，notIn：字段 NOT IN (value.get(0), value.get(1), …)

``` java
@Test
public void contextLoads(){
        QueryWrapper<Employee> inWrapper = new QueryWrapper<>();
        //in() 符合多个条件的值
        inWrapper.in("age", 8, 16, 26);
        List<Employee> inList = employeeService.list(inWrapper);
        System.out.println(inList );

        //**********************

        QueryWrapper<Employee> notInWrapper= new QueryWrapper<>();
        //notIn() 不符合多个条件的值
        notInWrapper.notIn("age", 8, 16, 26);
        List<Employee> notInList = employeeService.list(notInWrapper);
        System.out.println(notInList );
}
```

or：或者 ，and：和

注意事项:
主动调用or表示紧接着下一个方法不是用and连接!(不调用or则默认为使用and连接)

``` java
@Test
public void contextLoads(){
        QueryWrapper<Employee> orWrapper = new QueryWrapper<>();
        //or() 查询age大于20 或者 gender等于1 的数据
        orWrapper.gt("age", 20).or().eq("gender", 1);
        List<Employee> orList = employeeService.list(orWrapper);
        System.out.println(orList );
}
```

orderByAsc：升序：ORDER BY 字段, … ASC，orderByDesc：降序：ORDER BY 字段, … DESC

``` java
@Test
public void contextLoads(){
        QueryWrapper<Employee> Wrapper = new QueryWrapper<>();
        //orderByAsc() 升序排序
        Wrapper.orderByAsc("id");
        List<Employee> list = employeeService.list(Wrapper);
        for(Employee e : list) {
            System.out.println(e);
        }
}
```

inSql：字段 IN ( sql语句 )，notInSql：字段 NOT IN ( sql语句 )

``` java
@Test
public void contextLoads(){
        QueryWrapper<Employee> inSqlWrapper = new QueryWrapper<>();
        //inSql() 符合sql语句的值
        inSqlWrapper .inSql("select id from employee where id < 10");
        List<Employee> inSqlList = employeeService.list(inSqlWrapper );
        System.out.println(inSqlList );

        //**********************

        QueryWrapper<Employee> notInSqlWrapper= new QueryWrapper<>();
        //notInSql() 不符合sql语句的值
        notInSqlWrapper.notInSql("select id from employee where id < 10");
        List<Employee> notInSqlList = employeeService.list(notInSqlWrapper);
        System.out.println(notInSqlList );
}
```

exists：拼接 EXISTS ( sql语句 )，notExists：拼接 NOT EXISTS ( sql语句 )

``` java
@Test
public void contextLoads(){
        QueryWrapper<Employee> existsWrapper = new QueryWrapper<>();
        //exists() 查询符合sql语句的值
        existsWrapper.exists("select last_name,gender from employee where id = 1");
        List<Employee> existsList = employeeService.list(existsWrapper);
        System.out.println(existsList );

        //**********************

        QueryWrapper<Employee> notExistsWrapper = new QueryWrapper<>();
        //notExists() 查询不符合sql语句的值
        notExistsWrapper.notExists("select last_name,gender from employee where id = 1");
        List<Employee> notExistsList = employeeService.list(notExistsWrapper);
        System.out.println(notExistsList );

}
```
