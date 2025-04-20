# mybatis


> pom

``` pom
<dependency>
	<groupId>org.mybatis.spring.boot</groupId>
	<artifactId>mybatis-spring-boot-starter</artifactId>
	<version>2.2.2</version>
</dependency>
```

> 一对多的关系

``` xml
<resultMap id="map" type="com.bmw.babylon.pojo.ExaminationStageResVo">
        <result column="id" property="id"/>
        <result column="question_desc" property="questionDesc"/>
        <result column="sample" property="sample"/>
        <result column="question_type" property="questionType"/>
        <result column="order_id" property="orderId"/>
        <collection  property="choiseList" javaType="java.util.ArrayList" ofType="com.bmw.babylon.rpa.opportunity.dto.QuestionsChoicesDTO">
            <result column="question_id" property="questionId" />
            <result column="choice_desc" property="choiceDesc"/>
            <result column="choice_id" property="choiceId"/>
        </collection>
</resultMap>
<select id="selectLikeAcademy" resultMap="map">
        SELECT a.id,question_desc,sample,question_type,order_id,
        qc.choice_desc ,qc.choice_id, qc.question_id, qc.id
        FROM questions a,
        questions_choices qc
        WHERE a.deleted=false
        and qc.deleted=false
        and a.id = qc.question_id
        and a.type LIKE 'academy%'
        order by a.order_id, qc.choice_id
</select>
```

> QuestionsChoicesDTO

``` java
@Data
@NoArgsConstructor
public class QuestionsChoicesDTO {
    private Long id;
    private Long questionId;
    private String choiceDesc;
    private String choiceId;
    private Integer score;

    public QuestionsChoicesDTO(QuestionsChoices entity) {
        this.id = entity.getId();
        this.questionId = entity.getQuestionId();
        this.choiceDesc = entity.getChoiceDesc();
        this.choiceId = entity.getChoiceId();
        this.score = entity.getScore();
    }
}
```
> QuestionsChoices

``` java

@Data
@EqualsAndHashCode(callSuper = true)
@Accessors(chain = true)
public class QuestionsChoices extends BaseEntity {

    private static final long serialVersionUID = 1L;

    /**
     * 问题id
     */
    private Long questionId;

    /**
     * 选项内容
     */
    private String choiceDesc;

    /**
     * 选项号
     */
    private String choiceId;

    /**
     * 选项号
     */
    private Integer score;

}
```

> ExaminationStageResVo

``` java
@Data
@Accessors(chain = true)
@NoArgsConstructor
public class ExaminationStageResVo {
//    问题和问题的选项
//    private String question;
//    private List<SelectionEntity> selection;

    private Long id;
    private String questionDesc;
    private String sample;
    private String questionType;
    private String orderId;
    private List<QuestionsChoicesDTO> choiseList;

}

```
