    -- DATE 형간의 비교는 그냥 '20200101' 과 같이 VARCHAR 쓰셔도 비교가 가능하긴 하지만
    -- 옳은 방법은 아닙니다.
    -- 따라서 TO_DATE 함수를 사용하여 비교하는것이 옳습니다

    SELECT *
    FROM PAYMENT_HISTORY
    WHERE ORDER_DATE >= TO_DATE('20200101')  AND
        ORDER_DATE < TO_DATE('20200201');

    -- 문제 1.
    -- PAYMENT_HISTORY 에서 1월달 매출(ORDER_PRICE)의 합을 구해주세요
    SELECT SUM(ORDER_PRICE)
    FROM PAYMENT_HISTORY
    WHERE ORDER_DATE >= TO_DATE('20200101')  AND
        ORDER_DATE < TO_DATE('20200201');

    -- 월별 매출을 뽑기 위해서는 날짜 데이터를 MONTH까지 잘라서
    --자른 데이터를 기준으로 그룹 바이 구문을 사용하면 MONTH 기준으로 뽑을 수 있습니다.
    --TO_CHAR(바꾼날짜컬럼, 포멧 문자열)
    -- YYYY - 4자리 년도
    -- MM - 2자리 월
    -- DD - 2자리 일
    --HH24 - 24시간
    --MI - 분
    --SS - 초
    SELECT TO_CHAR(ORDER_DATE, 'YYYYMM') AS MONTH, SUM(ORDER_PRICE)
    FROM PAYMENT_HISTORY
    GROUP BY TO_CHAR(ORDER_DATE, 'YYYYMM');

    --문제 2.
    --1월 사이의 일별 매출을 뽑아주세요
    SELECT 
        TO_CHAR(ORDER_DATE, 'YYYYMMDD') AS MONTH, SUM(ORDER_PRICE)
    FROM 
        PAYMENT_HISTORY
    WHERE 
        ORDER_DATE >= TO_DATE('20200101') AND
        ORDER_DATE < TO_DATE('20200201')
    GROUP BY 
        TO_CHAR(ORDER_DATE, 'YYYYMMDD')

    -- 문제 3.
    -- 안녕하세요 마케팅팀입니다
    -- 혹시 1월 ~ 3월의 매출액과 판매 대수를 각각 알고싶은데
    -- 데이터를 보내주실수 있을까요?
    -- 최대한 빨리 부탁드리겠습니다
    -- 감사합니다
    SELECT 
        TO_CHAR(ORDER_DATE, 'YYYYMM'), SUM(ORDER_PRICE), COUNT(ORDER_PRICE)
    FROM 
        PAYMENT_HISTORY
    WHERE 
        ORDER_DATE >= TO_DATE('20200101') AND
        ORDER_DATE < TO_DATE('20200401')
    GROUP BY 
        TO_CHAR(ORDER_DATE, 'YYYYMM')

    -- 문제4.
    -- 안녕하세요 xxx 님 YY팀 ZZZ입니다
    -- 혹시 데이터 담당하시는거 같아서
    -- 문의 드리는데요
    -- 요즘 이제 월별 단일 매출액이 가장 높은 금액이 얼마인지 궁굼해서 -> MAX 사용
    -- 요청드립니다
    -- 감사합니다
    SELECT 
        TO_CHAR(ORDER_DATE, 'YYYYMM') AS MONTH,MAX(ORDER_PRICE)
    FROM 
        PAYMENT_HISTORY
    GROUP BY 
        TO_CHAR(ORDER_DATE, 'YYYYMM')
    ORDER BY MONTH ASC

    -- 문제 5
    -- 안녕하세요 경영진입니다
    -- 데이터 중 가장 많이 팔린 상품명을 알고 싶습니다
    -- 두종류 전부 필요합니다 (많이 팔린 개수, 금액 가장 높은것)
    -- 모든 시간 통틀어서 데이터 조회 후 회신 부탁드립니다.
    -- 판매 개수 구하는법
    -- SUM(ORDER_COUNT), GROUP BY PRODUCT_ID
    -- 판매 개수 구하는법
    -- SUM(ORDER_COUNT), GROUP BY PRODUCT_ID
    -- 푸는 방법
    -- 1. PRODUCT - PAYMENT_HISTORY 조인 (이유 : 프로덕트에 상품명이 있고, 페이먼트 히스토리에 판매 정보가 있음)
    -- 2. PAYMENT_HISTORY 의 PRODUCT_ID 기준으로 GROUP BY 를 하신 다음에요
    -- 3. SELECT 할 컬럼은 PRODUCT.NAME, SUM(PAYMENT_HISTORY.ORDER_COUNT)

    --------------------------------판매개수-------------------------------

    SELECT
        product.name AS 상품명,
        SUM(payment_history.order_count) AS 판매개수
        SUM(payment_history.order_price) AS 최고가
    FROM
        payment_history,
        product
    WHERE
        payment_history.product_id = product.id
    GROUP BY
        product_id,
        product.name
    ORDER BY
        판매개수 DESC;

------------------------------------최고가-------------------------------------

    SELECT
        product.name AS 상품명,
        SUM(payment_history.order_count) AS 판매개수,
        SUM(payment_history.order_price) AS 최고가
    FROM
        payment_history, product
    WHERE
        payment_history.product_id = product.id
    GROUP BY
        product_id,
        product.name,
        product.price
    ORDER BY
        최고가  desc;

------------------------------------------------------------------------------
    -- 문제 6.
    -- 데이터중에 카테고리별 총 합계 금액이(PRODUCT 기준, 판매된 금액 아님) 가장 많은 카테고리를 찾아주세요
    -- 총 합계 금액 - PRODUCT 의 PRICE 를 다 합친 가격을 의미합니다.
    SELECT
        CATEGORY.NAME, SUM(PRODUCT.PRICE)
    FROM
        CATEGORY, PRODUCT
    WHERE
        CATEGORY.ID = PRODUCT.CATEGORY_ID
    GROUP BY
        CATEGROY.ID, CATEGORY.NAME
    
    -- 문제 7.
    -- PAYMENT HISTORY 테이블만 가지고
    -- 평균 단가가 10만원 이하인 판매 목록을 다 가져오세요
    -- PAYMENT_HISTORY 테이블 외 조인 금지
    -- 평균 단가 = 판매 금액 / 판매 개수

    SELECT
        (ORDER_PRICE/ORDER_COUNT) AS 평균단가
    FROM
        PAYMENT_HISTORY
    WHERE
        (ORDER_PRICE/ORDER_COUNT) <= 100000

    -- 문제 8.
    -- PAYMENT_HISTORY 에서 시도별 판매액을 출력해주세요
    SELECT
        address, sum(order_price) 
    from 
        payment_history
     group by 
        address;
        