<template>
  <div class="wrapper">
    <div class="content d-flex">
      <div class="content-menu">
        <a class="content-menu-item text-success" href="">Chi tiết</a>
        <a class="content-menu-item" href="">Công việc()</a>
        <a class="content-menu-item" href="">Báo cáo(2)</a>
        <a class="content-menu-item" href="">Đính kèm(5)</a>
      </div>
    </div>
    <div class="content-main row">
      <div class="content-main-left col-md-12 col-lg-4">
        <div class="content-main-left-thongtin card">
          <div class="card-title">Thông tin chung</div>
          <div class="card-info mt-4">
            <table class="table">
              <tr class="table-item">
                <td class="table-item-name">Mã hồ sơ</td>
                <td class="table-item-value">10</td>
              </tr>
              <tr class="table-item">
                <td class="table-item-name">Tên hồ sơ</td>
                <td class="table-item-value">
                  Đóng điểm bán nhà thuốc Upharma số 24
                </td>
              </tr>
              <tr class="table-item">
                <td class="table-item-name">Trạng thái</td>
                <td class="table-item-value">25%</td>
              </tr>
              <tr class="table-item">
                <td class="table-item-name">Người quản trị</td>
                <td class="table-item-value">Ngô Thị Hiền</td>
              </tr>
              <tr class="table-item">
                <td class="table-item-name">Người tham gia</td>
                <td class="table-item-value">Ngô Thị Hiền, Nguyễn Khánh Tâm</td>
              </tr>
              <tr class="table-item">
                <td class="table-item-name">Thời gian</td>
                <td class="table-item-value">01/10/2022 -</td>
              </tr>
            </table>
          </div>
        </div>
        <div class="content-main-left-thaoluan card">
          <div class="card-title">Thảo luận</div>
          <div class="input-thaoluan">
            <input
              class="input-mess"
              type="text"
              placeholder="Nhập tin nhắn..."
            />
            <button class="btn btn-success">Gửi</button>
          </div>
        </div>
      </div>
      <div class="col-md-12 col-lg-8 content-main-right">
        <div class="content-main-right-header row">
          <div class="col-md-12 col-lg-3 card">
            <div class="card-info">
              <div class="card-info-value">10</div>
              <div class="card-info-text ">Tổng công việc</div>
            </div>
            <div class="card-icon">
              <i class="fa-solid fa-list-check"></i>
            </div>
          </div>
          <div class="col-md-12 col-lg-3 card">
            <div class="card-info">
              <div class="card-info-value">10</div>
              <div class="card-info-text ">Người thực hiện</div>
            </div>
            <div class="card-icon">
              <i class="fa-solid fa-user-group"></i>
            </div>
          </div>
          <div class="col-md-12 col-lg-3 card">
            <div class="card-info">
              <div class="card-info-value">10</div>
              <div class="card-info-text ">Ngày thực hiện</div>
            </div>
            <div class="card-icon">
              <i class="fa-regular fa-hourglass-half"></i>
            </div>
          </div>
        </div>
        <div class="content-main-right-footer card">
          <div class="card-title d-flex">
            <span class="card-title-text">Thống kê tiến độ</span>
            <i class="fa-solid fa-right-from-bracket"></i>
          </div>
          <div class="card-noidung d-flex">
            <span class="card-noidung-name">Lập hồ sơ hoạt động</span>
            <span class="card-noidung-thongke">100%</span>
          </div>
          <div class="card-noidung d-flex">
            <span class="card-noidung-name">Quyết định đóng điểm bán</span>
            <span class="card-noidung-thongke">2%</span>
          </div>
          <div class="card-noidung d-flex">
            <span class="card-noidung-name">Xây dựng kế hoạch</span>
            <span class="card-noidung-thongke">0%</span>
          </div>
          <div class="card-noidung d-flex">
            <span class="card-noidung-name">Thực hiện báo cáo</span>
            <span class="card-noidung-thongke">0%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   created(){
    const id = this.$route.params.id.replace("-","/");
    //console.log(id);
   }
};
</script>

<style lang="scss" scoped>
.content {
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 40px;
  align-items: center;
  &-menu {
    margin-left: 30px;

    &-item {
      text-decoration: none;
      margin-right: 20px;
      color: #797575;
      font-weight: 600;
      font-size: 14px;
    }
  }
}
.content-main {
  margin: 30px;
  &-left {
    .card {
      margin-bottom: 20px;

      padding: 30px;
      &-title {
        font-weight: 600;
        font-size: 20px;
        border-bottom: 1px solid #000;
      }
      &-info {
        .table {
          &-item {
            &-name {
              color: #797575;
            }
            &-value {
              color: #000000;
              font-weight: 600;
              font-size: 14px;
              line-height: 30px;
            }
          }
        }
      }
      .input-thaoluan {
        .input-mess {
          line-height: 30px;
          padding-left: 5px;
        }
        .btn {
          margin-left: 10px;
        }
      }
    }
  }
  &-right {
    &-header {
      justify-content: space-between;
      
      .card {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: initial;
        text-align: center;
        
        height: 80px;
        margin: 0 10px 30px;
        background: linear-gradient(180deg, #1d974a 0%, #4c5612 100%);
        border-radius: 20px;
        color: #ffffff;
        font-weight: 600;
        font-size: 14px;
      
        &-icon {
          background: #52bb11;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          text-align: center;
          line-height: 40px;
        }
      }
    }
    &-footer {
     

      padding: 30px;
      .card-title {
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
        justify-content: space-between;
        margin-bottom: 30px;
        border-bottom: 1px solid #000;
      }
      .card-noidung {
        justify-content: space-between;
        margin: 10px 100px;
        &-name {
          background: linear-gradient(180deg, #6e9e0e 0%, #097732 100%);
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 20px;
          width: 500px;
          height: 50px;
          font-weight: 600;
          font-size: 16px;
         
          /* identical to box height, or 125% */

          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
        }
        &-thongke {
          font-weight: 700;
          font-size: 24px;
          line-height: 30px;
          /* identical to box height, or 125% */
          display: flex;
          align-items: center;
          color: #1d974a;
        }
      }
    }
  }
}
</style>
